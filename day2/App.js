import React from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
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

function CartPage() {
  return (
    <div>
      <h1>IT WORKS</h1>
    </div>
  )
}

export default App;
