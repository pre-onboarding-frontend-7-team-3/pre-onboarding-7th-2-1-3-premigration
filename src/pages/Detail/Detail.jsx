import Header from "components/Header";
import CarDetail from "components/CarDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarState } from "context/CarContext";
import { HEADER_DATA } from "constants/HeaderData";

function Detail() {
  const { id } = useParams();
  const {
    carState: { carList, selectedCar },
    findCar,
  } = useCarState();

  useEffect(() => {
    findCar(id);
  }, [carList]);

  return (
    <section>
      <Header title={HEADER_DATA.CAR_DETAIL} redirect />
      <CarDetail selectedCar={selectedCar} />
    </section>
  );
}

export default Detail;
