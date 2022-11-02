import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2000,
});

export const getCars = async (queryParams = {}) => {
  instance.defaults.params = queryParams;
  const res = await instance.get("/cars");

  return res.data.payload;
};
