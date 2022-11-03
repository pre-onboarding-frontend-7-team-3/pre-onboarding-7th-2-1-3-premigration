import CarInfoBox from "components/CarListItem";
import NoData from "components/common/NoData";

import { CarListWrapper } from "./CarList.style";

const  CarList = ({ carList }) => {
  return (
    <CarListWrapper>
      {carList.length > 0 ? carList.map((car) => <CarInfoBox key={car.id} {...car} />) : <NoData />}
    </CarListWrapper>
  );
}

export default CarList;
