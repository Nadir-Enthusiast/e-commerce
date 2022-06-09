import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img
                className='checkout-ad'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_D1gRSNqTexEJOufTfgfdlLWWPmhHVR_FIg&usqp=CAU'
                alt=''
            />

            <div>
                <h1 className="checkout-title">Your shopping cart</h1>
            </div>
        </div>

        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
