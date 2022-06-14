import "./Subtotal.css"
import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getTotalPrice } from "./reducer";

function Subtotal() {
  const [{cart}] = useStateValue();
  /*
  function calcPrice(obj) {
    let totalPrice = 0;
    for(let i=0;i<obj.length;i++) {
        totalPrice += Number(obj[i].price);
    }
    return Math.round(totalPrice*100)/100;
  }
  */

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({cart.length} items): <strong>{value}$</strong>
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
        <button>Proceed</button>
    </div>
  )
}

export default Subtotal
