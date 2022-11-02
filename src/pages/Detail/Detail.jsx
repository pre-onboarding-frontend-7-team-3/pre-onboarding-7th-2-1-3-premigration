import CarDetail from "components/CarDetail/CarDetail";
import { useCarState } from "context/CarContext";
import { useGetCarDetail } from "hooks/useGetCarDetail";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const carData = useGetCarDetail(id);

  return carData && <CarDetail data={carData} />;
}

export default Detail;
