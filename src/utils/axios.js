import axios from "axios";

const xhr = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "/api"
});
xhr.interceptors.response.use(response => response, error => {
  if (/4\d{2}/.test(error.status.toString())) {
    location.href = "/login";
  } else if (/5\d{2}/.test(error.status.toString())) {
    location.href = "/error";
  }
  return Promise.reject(error);
});

