import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom";
 
function Payment() {
  const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className="payment-container">
            <h1>
                Checkout (<Link to="/checkout">{cart?.length}</Link>)
            </h1>

            {/* Payment ---- Delivery Address */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user?.email}</p>
                    <p>123456, JavaScript region</p>
                    <p>Never Gonna Give You Up town, RickRoll Federation</p>
                </div>

            </div>
            {/* Payment ---- Review Items */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review items</h3>
                </div>
                <div className="payment-items">
                    {cart.map(item => (
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
            {/* Payment ---- Payment method */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    <h1>Unavailable now :(</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
