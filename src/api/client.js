import axios from "axios";

const clientApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const productAPI = {
  getProducts: (fuelType, segment) => {
    console.log(`AXIOS: `, fuelType, segment);
    return clientApi.get(`cars?fuelType=${fuelType}&segment=${segment}`);
  },
};
