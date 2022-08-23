import "./Orders.css"
import React, { useEffect, useState } from 'react'
import {db} from "../../firebase";
import {useStateValue} from "../../StateProvider";
import Order from "../order/Order";

function Orders() {
  const [{cart, user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
        db
      .collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
      ))
    } else {
        setOrders([])
    }
  }, [user])

  return (
    <div className="orders">
        <h1>Your orders</h1>
        <div className="orders-order">
            { orders ? orders.map(order => (
                <Order order={order} />
            )) : <h2>You don't have any orders.</h2>}
        </div>
    </div>
  )
}

export default Orders