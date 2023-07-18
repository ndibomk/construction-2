import axios from "axios";

const API = axios.create({
  baseURL: 'https://hustle-kenya-7azi.onrender.com',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;

  
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const createTour = (formData) => API.post("/products", formData);
export const createMpesa = (formData) => API.post("/mpesa/stkPush", formData);
export const createInvoice = (formData) => API.post("/invoice", formData);
export const createMessage = (formData) => API.post("/message", formData);
export const createHelp = (formData) => API.post("/help", formData);
export const createAnswer = (formData) => API.post("/answer", formData);
export const deleteTour = (id) => API.delete(`/products/${id}`);
export const user = (updatedTourData, id) =>
  API.patch(`users/update/${id}`, updatedTourData);