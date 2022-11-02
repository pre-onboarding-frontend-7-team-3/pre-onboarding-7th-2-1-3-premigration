import axios from "axios";

export const carListApi = async (e, query) => {
  if (query === undefined && e === undefined) {
    query = " ";
  }
  const { data } = await axios.get(`https://preonboarding.platdev.net/api/cars?segment=${query}`);
  return { data };
};
