const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LDnsLFkTetcLScvJIvGcQOinaAUEDk0DLdrEnNIAw8bPJZhTL5JoRBjTEYOBVgrKEwbBJUoWJl39IifhwXD7nCB00bmHFq0dl")

// API 

// API config

const app = express();

//Middleware
app.use(cors({origin: true}))
app.use(express.json())

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello, World!"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment request for", total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});

// Listen Command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/e-commerce1-ae557/us-central1/api