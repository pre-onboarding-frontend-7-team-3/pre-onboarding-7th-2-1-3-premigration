import CarInfoBox from "components/CarInfoBox";
import { CarListWrapper } from "./CarList.style";

function CarList({ carList }) {
  console.log("carList", carList);
  return (
    <CarListWrapper>
      {carList?.length > 0 ? (
        carList.map((car) => <CarInfoBox key={car.id} {...car} />)
      ) : (
        <div>차량이 없습니다</div>
      )}
    </CarListWrapper>
  );
}

export default CarList;
