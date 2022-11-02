import React, { useState, useEffect } from "react";
import { carListApi } from "./Api/client";
import CarList from "./components/CarList";

const useCarData = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carListApi().then(({ data }) => {
      setCars(data.payload);
    });
  }, []);

  const carData = cars.map((car) => <CarList key={car.id} car={car} />);
  return carData;
};

export default useCarData;
