import { createContext, useState, useReducer, useEffect, useCallback, useMemo } from "react";
import { getCars } from "apis";

import { carReducer } from "helpers/useCarReducer";

const state = {
  carList: [],
  selectedCar: null,
};

export const CarContext = createContext("");

export default function CarContextWrapper({ children }) {
  const [carState, dispatch] = useReducer(carReducer, state);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getCarsHandler = useCallback((params = {}) => {
    setIsLoading(true);
    getCars(params)
      .then((res) => {
        dispatch({ type: "GET", cars: res });
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  const findCarsHandler = useCallback((id) => {
    dispatch({ type: "FIND", id });
  }, []);

  const contextValue = useMemo(() => {
    return {
      carState,
      isLoading,
      errorMessage,
      getCars: getCarsHandler,
      findCars: findCarsHandler,
    };
  }, [carState, isLoading, errorMessage]);

  useEffect(getCarsHandler, []);

  return <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>;
}
