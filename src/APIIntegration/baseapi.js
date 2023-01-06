import axios from "axios";

const APIKit = axios.create({
    baseURL: "https://panorbit.in/api",
})

export default APIKit
