
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Messages from "./Messages";

const stripePromise = loadStripe('pk_test_51NPQBISJcB2zZP9nVufAsDhe9sBvag1bhk7lw74fLo5dqqvNljtU9vo8vvlEB7CzEYudXOskOrOfRCYlVt9sW1We00eHcbrVmD');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('auth user', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          } />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


