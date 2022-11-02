import Header from "components/Header";
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
    console.log("id", id);

    console.log("loading", isLoading);
    findCars(id);
  }, [carList]);

  return (
    <section>
      <Header title="차량상세" />
      {selectedCar?.length && (
        <>
          <div>
            {selectedCar[0]?.attribute.brand}
            {selectedCar[0]?.attribute.name}
          </div>
        </>
      )}
    </section>
  );
}

export default Detail;
