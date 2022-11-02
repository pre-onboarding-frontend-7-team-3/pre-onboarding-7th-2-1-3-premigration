import { CarInfoBoxStyle } from "./CarInfoBox.style";
import { Link } from "react-router-dom";

function CarInfoBox({ attribute: { brand, name }, id }) {
  return (
    <Link to={`/detail/${id}`}>
      <CarInfoBoxStyle>
        {brand}
        {name}
      </CarInfoBoxStyle>
    </Link>
  );
}

export default CarInfoBox;
