import Header from "components/Header";
import CarDetail from "components/CarDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarState } from "context/CarContext";

function Detail() {
  const { id } = useParams();
  const {
    carState: { carList, selectedCar },
    findCar,
  } = useCarState();

  useEffect(() => {
    findCar(id);
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
