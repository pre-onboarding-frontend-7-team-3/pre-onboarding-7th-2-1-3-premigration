import Button from "../common/Button";
import * as Style from "./CarInfoBox.style";
import { Link } from "react-router-dom";
import formatAttribute from "utils/formatAttribute";

function CarInfoBox({ attribute: { brand, name, segment, fuelType, imageUrl }, amount, id }) {
  console.log(imageUrl);
  return (
    <Style.Wrapper>
      <Link to={`/detail/${id}`}>
        <Style.InnerWrapper>
          <Style.AttributeWrapper>
            <Style.TextWrapper>
              <Style.MainAttribute>{brand}</Style.MainAttribute>
              <Style.MainAttribute>{name}</Style.MainAttribute>
            </Style.TextWrapper>
            <Style.TextWrapper>
              <Style.SubAttribute>
                {formatAttribute(segment)} / {formatAttribute(fuelType)}
              </Style.SubAttribute>
              <Style.SubAttribute>월 {amount.toLocaleString("ko-KR")} 원 부터</Style.SubAttribute>
            </Style.TextWrapper>
          </Style.AttributeWrapper>
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
      </Link>
    </Style.Wrapper>
  );
}

export default CarInfoBox;
