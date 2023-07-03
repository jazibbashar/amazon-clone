import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        {/* Payment section - delivery Address*/}
        <h1>
        Checkout(<Link to= "/checkout">{basket.length}Items
           </Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address:</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>Banaras Bank Chowk Chandwara</p>
            <p>Muzaffarpur</p>
          </div>
        </div>

        {/* Payment section - Review Items*/}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery:</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method:</h3>
          </div>
          <div className='payment__details'>
            {/* stripe magic will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
