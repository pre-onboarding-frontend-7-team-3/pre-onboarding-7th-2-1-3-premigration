import axios from "axios";
// import { useFilter } from "../contexts/FilterContext";

export const carListApi = async (tag) => {
  // const [filter, setFilter] = useFilter([]);
  console.log(111111111, tag);
  const { data } = await axios.request("https://preonboarding.platdev.net/api/cars?segment=C");
  console.log({ data });
  return { data };
};
