
import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {  Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { db } from './firebase';


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [addressError, setAddressError] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    town: '',
    area: '',
    pincode: '',
    city: '',
    country: ''
  });

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  const handleCashOnDelivery = () => {
    // Implement the logic for handling cash on delivery
    // For example, you can store the order details in the database and navigate to the success page.
    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .add({
        basket: basket,
        amount: getBasketTotal(basket),
        created: new Date().getTime(),
        paymentMethod: 'Cash on Delivery',
        address: address // Include the address in the order details
      })
      .then(() => {
        dispatch({
          type: 'EMPTY_BASKET'
        });
        navigate('/orders');
      })
      .catch(error => {
        console.log('Error placing the order:', error);
      });
  }

      const handleBuyNow = () => {
    if (basket.length === 0 || getBasketTotal(basket) === 0) {
      alert("Please add items to the cart.");
      return;
    }
      const trimmedAddress = {
      street: address.street.trim(),
      town: address.town.trim(),
      area: address.area.trim(),
      pincode: address.pincode.trim(),
      city: address.city.trim(),
      country: address.country.trim()
    };
  
    if (Object.values(trimmedAddress).some(value => value === '')) {
      alert("All Fields are mandatory");
      return;
    }
    navigate('/messages');
  
    // Rest of the code for handling the order and navigation
    
  };
  

  const handleAddressChange = event => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to="/checkout">{basket.length} Items</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address:</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="Street"
            />
            <input
              type="text"
              name="town"
              value={address.town}
              onChange={handleAddressChange}
              placeholder="Town"
            />
            <input
              type="text"
              name="area"
              value={address.area}
              onChange={handleAddressChange}
              placeholder="Area"
            />
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleAddressChange}
              maxLength={6}
              placeholder="Pincode"
            />
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              placeholder="City"
            />
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleAddressChange}
              placeholder="Country"
            />
            {addressError && <p className="payment__addressError">Please fill in all address fields.</p>}
            
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery:</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method:</h3>
          </div>
          <div className='payment__details'>
            <div className='payment__method'>
              <input
                type='radio'
                id='card'
                name='paymentMethod'
                value='card'
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <label htmlFor='card'>Card Payment</label>
            </div>
            <div className='payment__method'>
              <input
                type='radio'
                id='cash'
                name='paymentMethod'
                value='cash'
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
              />
              <label htmlFor='cash'>Cash on Delivery</label>
            </div>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Details:</h3>
          </div>
          <div className='payment__details'>
            {paymentMethod === 'card' ? (
              <CardElement onChange={handleChange} />
            ) : null}
            <div className='payment__priceContainer'>
              <CurrencyFormat
                renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
              {paymentMethod === 'card' ? (
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              ) : (
                <button onClick={handleBuyNow} className='messages__button'>
               Place Order
                </button>
              )}
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
