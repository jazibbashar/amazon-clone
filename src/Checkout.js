import React, { useContext } from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { StateContext } from './StateProvider';
// import { useLocation } from 'react-router-dom';
const Checkout = () => {
  const [{ basket, user }] = useContext(StateContext);
  // const location = useLocation();
  // const email = location.state?.email;

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
       <div>
          
       <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
            // Make sure to provide a unique key prop
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

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
