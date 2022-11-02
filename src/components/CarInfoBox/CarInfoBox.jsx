import { CarInfoBoxStyle } from "./CarInfoBox.style";
import isNew from "utils/isNew";

import Button from "../common/Button";
import * as Style from "./CarInfoBox.style";

function CarInfoBox({ attribute: { brand, name } }) {
  return (
    <Style.Wrapper>
      <Style.InnerWrapper>
        <Style.TextWrapper>
          <Style.MainInfo>{brand}</Style.MainInfo>
          <Style.SubInfo>{name}</Style.SubInfo>
        </Style.TextWrapper>
        <Style.ImageWrapper>
          <Style.ButtonWrapper>
            <Button
              width="52px"
              height="22px"
              borderRadius="42px"
              fontSize="12px"
              fontWeight="700"
              color={(props) => props.theme.WHITE}
              backgroundColor={(props) => props.theme.BLUE}
            >
              신규
            </Button>
          </Style.ButtonWrapper>
        </Style.ImageWrapper>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}

export default CarInfoBox;
