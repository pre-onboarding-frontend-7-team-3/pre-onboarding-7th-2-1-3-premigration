import { CarContext } from "context/CarContext";
import { useContext } from "react";
import { useCarState } from "context/CarContext";

export const useGetCarDetail = (id) => {
  const { carState } = useCarState();

  const carData = carState.carList.find((car) => car.id === +id);

  return carData;
};
