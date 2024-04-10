import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-backend-eltq.onrender.com"
})
