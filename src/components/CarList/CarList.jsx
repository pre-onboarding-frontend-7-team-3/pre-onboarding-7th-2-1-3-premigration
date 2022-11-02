import CarInfoBox from "components/CarInfoBox";
import { CarListWrapper } from "./CarList.style";

function CarList({ carList }) {
  console.log("carList", carList);
  return (
    <CarListWrapper>
      {carList?.map((car) => (
        <CarInfoBox key={car.id} {...car} />
      ))}
    </CarListWrapper>
  );
}

export default CarList;
