import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img
                className='checkout-ad'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_D1gRSNqTexEJOufTfgfdlLWWPmhHVR_FIg&usqp=CAU'
                alt=''
            />

            <div>
                <h2>Hello, {user?.email}!</h2>
                <h1 className="checkout-title">Your shopping cart</h1>
                {cart.map(item => {
                    return(
                    <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                )})}

            </div>
        </div>

        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout