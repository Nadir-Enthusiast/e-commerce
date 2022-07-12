import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
  const [{cart}, dispatch] = useStateValue();
  
  const removeFromCart = () => {
    dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
    })
  }
  
  return (
    <div className='checkoutProduct'>
        <img
            className='checkoutProduct-image' 
            src={image}
            alt=''
        />

        <div className="checkoutProduct-info">
            <p className="checkoutProduct-title">{title}</p>
            <p className="checkoutProduct-price">
                <strong>{price}</strong>
                <small>$</small>
            </p>
            <div className="checkoutProduct-rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>
            {!hideButton && (<button onClick={removeFromCart}>Remove</button>)}
        </div>
    </div>
  )
}

export default CheckoutProduct