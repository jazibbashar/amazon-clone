import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Subtotal from "./Subtotal";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

     function App() {
     const [{},dispatch]=useStateValue();

    useEffect(()=>{
            auth.onAuthStateChanged(authUser=>{
              console.log('auth user',authUser);
              if(authUser){
//  the user just logged in
  dispatch({
  type:'SET_USER',
  user:authUser

})
    }else{
// the user is logged out
    dispatch({
    type:'SET_USER',
    user:null
 })
   }
    })
    },[])
  return (
    <Router>
      <div className="app">
      <Header/>
        <Routes>
          {/* Home Page Route */}
          <Route path="/login" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
