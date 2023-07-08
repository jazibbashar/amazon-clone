import React from 'react';
import './Messages.css';
import { Link } from 'react-router-dom';

const Messages = () => {
  return (
    <div className="messages__container">
      <h3 className="messages__title">
        Your order has been placed successfully and will be delivered to you soon. Thanks for shopping with Amazon!
      </h3>
      <button className="messages__button">
        <Link to='/'>Back to Home</Link>
      </button>
    </div>
  );
}

export default Messages;
