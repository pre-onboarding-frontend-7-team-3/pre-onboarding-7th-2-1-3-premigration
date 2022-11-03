import CarInfoBox from "components/CarInfoBox";
import NoData from "components/common/Nodata";

import { CarListWrapper } from "./CarList.style";

function CarList({ carList }) {
  return (
    <CarListWrapper>
      {carList.length > 0 ? carList.map((car) => <CarInfoBox key={car.id} {...car} />) : <NoData />}
    </CarListWrapper>
  );
}

export default CarList;
