import Header from "components/Header";
import CarDetail from "components/CarDetail";
import { CarContext } from "context/CarContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const {
    carState: { carList, selectedCar },
    findCars,
  } = useContext(CarContext);

  useEffect(() => {
    findCars(id);
  }, [carList]);

  console.log(selectedCar);
  return (
    <section>
      <Header title="차량상세" />
      {selectedCar && <CarDetail selectedCar={selectedCar} />}
    </section>
  );
}

export default Detail;
