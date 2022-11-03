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
    isLoading,
  } = useContext(CarContext);

  useEffect(() => {
    findCars(id);
  }, [carList]);
  console.log(selectedCar);
  return (
    <section>
      <Header title="차량상세" />
      {selectedCar?.length && <CarDetail selectedCar={selectedCar[0]} />}
    </section>
  );
}

export default Detail;
