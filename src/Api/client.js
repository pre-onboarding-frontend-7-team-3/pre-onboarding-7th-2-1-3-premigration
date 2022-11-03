import axios from "axios";
import { BASE_URL } from "../config";

export const carListApi = async (e, query) => {
  if (query === undefined && e === undefined) {
    query = " ";
  }
  const { data } = await axios.get(`${BASE_URL}?segment=${query}`);

  return { data };
};
