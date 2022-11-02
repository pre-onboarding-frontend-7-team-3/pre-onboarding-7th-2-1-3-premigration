import React, { createContext, useState, useContext, useEffect } from "react";
import { carListApi } from "../Api/client";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carListApi().then(({ data }) => {
      setCars(data.payload);
    });
  }, []);

  return <FilterContext.Provider value={{ cars, setCars }}>{children}</FilterContext.Provider>;
};

export const useFilter = () => useContext(FilterContext);
