import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import Payment from "./Payment";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider"

function App() {
  const [{cart}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //the user logged in or was active
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user logged out or was absent
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/checkout" element={<CheckoutEl />}></Route>
          <Route path="/payment" element={<PaymentEl />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

function CheckoutEl() {
  return (
    <div>
      <Header />
      <Checkout />
    </div>
  )
}

function PaymentEl() {
  return (
    <div>
      <Header />
      <Payment />
    </div>
  )
}

export default App;
