import { CarInfoBoxStyle } from "./CarInfoBox.style";
import isNew from "utils/isNew";
function CarInfoBox({ attribute: { brand, name }, createdAt}) {
  console.log(isNew(createdAt))
  return (
    <CarInfoBoxStyle>
      {brand}
      {name}
    </CarInfoBoxStyle>
  );
}

export default CarInfoBox;
