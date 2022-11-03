import { createContext, useReducer, useEffect, useCallback, useContext } from "react";
import { getCars } from "apis";
import { CAR_ACTION_TYPES, carReducer } from "helpers/useCarReducer";
import { reducerUtils } from "utils/reducerUtils";

const state = {
  carList: reducerUtils.default(),
  selectedCar: null,
};

export const CarContext = createContext("");

export default function CarContextWrapper({ children }) {
  const [carState, dispatch] = useReducer(carReducer, state);

  const getCarsHandler = useCallback((params = {}) => {
    dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_LOADING });
    getCars(params)
      .then((res) => {
        dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_SUCCESS, cars: res });
      })
      .catch((error) => {
        dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_ERROR, error });
        throw new Error(error.message);
      });
  }, []);

  useEffect(getCarsHandler, []);

  return (
    <CarContext.Provider value={{ carState, getCars: getCarsHandler }}>
      {children}
    </CarContext.Provider>
  );
}

export const useCarState = () => {
  const state = useContext(CarContext);
  if (!state) {
    throw new Error("Error finding CarContext Provider");
  }
  return state;
};
