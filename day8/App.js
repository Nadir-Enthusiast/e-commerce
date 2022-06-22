import React , {useEffect} from 'react';
import './App.css';
import {Header, Home, Checkout, Login, Payment, Profile} from "./exporter.js";
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
          <Route path="/user-profile" element={<UserProfile />}></Route>
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

function UserProfile() {
  return (
    <div>
      <Header />
      <Profile />
    </div>
  )
}

export default App;
