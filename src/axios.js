import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-e-commerce1-ae557.cloudfunctions.net/api"
})

export default instance;