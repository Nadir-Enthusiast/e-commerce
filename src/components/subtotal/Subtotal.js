import "./Subtotal.css"
import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getTotalPrice } from "../../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{cart}] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({cart.length} items): <strong>{value}</strong>
                    </p>  
                    <small className="subtotal-gift">
                        <input type="checkbox" />Order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getTotalPrice(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button onClick={e => history("/payment")}>Proceed</button>
    </div>
  )
}

export default Subtotal