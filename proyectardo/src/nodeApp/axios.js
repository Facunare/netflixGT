import axios from "axios";

const instance = axios.create({
  baseURL: 'https://netflix-gt-bdx8/api',
  withCredentials: true,
});

export default instance;