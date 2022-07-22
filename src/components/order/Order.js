import "./Order.css"
import React from 'react'
import moment from "moment"
import CheckoutProduct from "../checkproduct/CheckoutProduct"
import CurrencyFormat from "react-currency-format"

function Order({order}) {
    console.log(order.data.cart)
  return (
    <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

        <p className="order-id">
            <small>{order.id}</small>
        </p>

        {order.data.cart?.map(item => (
            <CheckoutProduct 
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                hideButton
            />
        ))}
        <CurrencyFormat
            renderText={(value) => (
                <p className="order-total">
                    Total: <strong>{value}</strong>
                </p>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />


    </div>
  )
}

export default Order