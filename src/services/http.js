import axios from "axios";

export const http = axios.create({
  baseURL: "https://restcountries.com/v2",
  timeout: 10000,
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
