import CarInfoBox from "components/CarListItem";

import { CarListWrapper } from "./CarList.style";

const CarList = ({ carList }) => {
  return (
    <CarListWrapper>
      {carList.length > 0 ? carList.map((car) => <CarInfoBox key={car.id} {...car} />) : null}
    </CarListWrapper>
  );
};

export default CarList;
