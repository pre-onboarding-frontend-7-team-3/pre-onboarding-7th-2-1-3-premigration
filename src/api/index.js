import axios from "axios";
const baseURL = "https://preonboarding.platdev.net/api/cars";

const request = axios.create({
  baseURL: baseURL,
});

export default request;
