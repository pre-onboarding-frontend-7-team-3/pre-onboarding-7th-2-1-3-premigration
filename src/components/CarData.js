import React from "react";
import { useFilter } from "../contexts/filterContext";
import CarList from "./CarList";
import NoneCar from "./NoneCar";
import Loading from "./Loading";

const CarData = () => {
  const { cars, loading } = useFilter();

  if (loading) {
    return <Loading />;
  }
  if (cars.length === 0) {
    return <NoneCar />;
  }
  const carData = cars.map((car) => <CarList key={car.id} car={car} />);
  return carData;
};

export default CarData;
