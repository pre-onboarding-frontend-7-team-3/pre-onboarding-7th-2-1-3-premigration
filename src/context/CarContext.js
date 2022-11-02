import { createContext, useReducer } from "react";
import carReducer from "../helper/carReducer";

export const dispatchContext = createContext(null);
export const carContext = createContext(null);

const initCars = { filter: "ALL", cars: [] };

export default function CarContextWrapper(props) {
  const [cars, dispatch] = useReducer(carReducer, initCars);

  return (
    <carContext.Provider value={cars}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </carContext.Provider>
  );
}
