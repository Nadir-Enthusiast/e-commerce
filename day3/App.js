import React from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/checkout" element={<CheckoutEl />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <div>
      <Home />
    </div>
  )
}

function CheckoutEl() {
  return (
    <div>
      <Checkout />
    </div>
  )
}

export default App;
