import axios from "./axios.js"; // Don't forget to import axios

const API = "http://localhost:3000/api";

export const registerRequest = async  (user) => {

  return axios.post(`/register`, user);
};

export const loginRequest = async  (user) => {

    return axios.post(`/login`, user);
};


export const verifyTokenRequest = async () => axios.get(`/verify`);

export const addFavorite = async (userId, movieId) => await axios.post(`/addFavorite/${movieId}`, { userId }); 
