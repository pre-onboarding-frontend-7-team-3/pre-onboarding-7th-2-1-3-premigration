import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import { carListApi } from "../Api/client";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(false);
  useMemo(() => [loading, setLoading], [loading]);
  const [carData, setCarData] = useState([]);
  useMemo(() => [carData, setCarData], [carData]);

  useEffect(() => {
    setLoading((pre) => !pre);
    carListApi().then(({ data }) => {
      setLoading((pre) => !pre);
      setCars(data.payload);
    });
  }, []);

  return (
    <FilterContext.Provider
      value={{
        cars,
        setCars,
        loading,
        carData,
        setCarData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
