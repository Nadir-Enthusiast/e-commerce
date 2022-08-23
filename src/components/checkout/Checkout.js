import React from 'react'
import "./Checkout.scss"
import Subtotal from "../subtotal/Subtotal"
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from '../checkproduct/CheckoutProduct';

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className='checkout'>
        <div className="top">
            <img
                className='checkout-ad'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_D1gRSNqTexEJOufTfgfdlLWWPmhHVR_FIg&usqp=CAU'
                alt=''
            />
            <Subtotal />
        </div>
            

            <div className='shop-list'>
                <h2>Hello, {user?user.email:"Guest"}!</h2>
                <h1 className="checkout-title">Your shopping cart</h1>
                { cart.length ===0 ? 
                <h3>You shopping cart is empty</h3> : 
                cart.map(item => {
                    return(
                    <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        description={item.description}
                    />
                )})}

            </div>
    </div>
  )
}

export default Checkout