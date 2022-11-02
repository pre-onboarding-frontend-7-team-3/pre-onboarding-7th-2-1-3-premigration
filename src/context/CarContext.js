import { createContext, useState, useReducer, useEffect, useCallback } from "react";
import { getCars } from "apis";

import { carReducer } from "helpers/useCarReducer";

const state = {
  carList: [],
  selectedCar: null,
};

export const CarContext = createContext("");

export default function CarContextWrapper({ children }) {
  const [carList, dispatch] = useReducer(carReducer, state);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getCarsHandler = useCallback((params = {}) => {
    setIsLoading(true);
    getCars(params)
      .then((res) => {
        dispatch({ type: "INIT", cars: res });
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  useEffect(getCarsHandler, []);

  return (
    <CarContext.Provider value={{ carList, isLoading, errorMessage, getCars: getCarsHandler }}>
      {children}
    </CarContext.Provider>
  );
}
