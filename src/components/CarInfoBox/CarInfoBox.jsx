import { CarInfoBoxStyle } from "./CarInfoBox.style";

function CarInfoBox({ attribute: { brand, name } }) {
  return (
    <CarInfoBoxStyle>
      {brand}
      {name}
    </CarInfoBoxStyle>
  );
}

export default CarInfoBox;
