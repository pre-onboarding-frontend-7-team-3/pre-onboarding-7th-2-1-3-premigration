import React from "react";
import { useFilter } from "../contexts/filterContext";
import CarList from "./CarList";

const CarData = () => {
  const { cars } = useFilter();

  const carData = cars.map((car) => <CarList key={car.id} car={car} />);

  return carData;
};

export default CarData;
