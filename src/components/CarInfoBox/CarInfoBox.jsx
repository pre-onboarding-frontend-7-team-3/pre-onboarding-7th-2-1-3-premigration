import { CarInfoBoxStyle } from "./CarInfoBox.style";
import isNew from "utils/isNew";
import {Link}from 'react-router-dom'
function CarInfoBox({ attribute: { brand, name, }, id, createdAt}) {

  return (
    <CarInfoBoxStyle>
      <Link to={`/detail/${id}`} >
      {brand}
      {name}
      </Link>
    </CarInfoBoxStyle>
  );
}

export default CarInfoBox;
