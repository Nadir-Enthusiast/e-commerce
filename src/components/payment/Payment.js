import React, {useState, useEffect} from 'react'
import CheckoutProduct from '../checkproduct/CheckoutProduct';
import "./Payment.css";
import {useStateValue} from "../../StateProvider";
import { getTotalPrice } from "../../reducer";
import {Link, useNavigate} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "../../axios";
import {db} from "../../firebase";
 
function Payment() {
  const [{cart, user}, dispatch] = useStateValue();

  const stripe = useStripe()
  const elements = useElements()

  const [processing, setProcessing] = useState("")
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const history = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
        const response = await axios({
            method: "post",
            url: `/payments/create?total=${getTotalPrice(cart) * 100}`
        })
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();

  }, [cart])

  console.log("Client Secret >>> ", clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) => {

        db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: "EMPTY_CART"
        })

        history("/orders", {replace: true})
    })
  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "")
  }

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
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment-priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Total payment: <strong>{value}</strong></h3>
                                )}
                                decimalScale={2}
                                value={getTotalPrice(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Proccessing</p> : "Buy Now!"}</span>
                            </button>
                        </div>
                    </form>

                    {error && <div>(error)</div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment