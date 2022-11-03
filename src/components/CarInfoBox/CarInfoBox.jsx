import Button from "../common/Button";
import * as S from "./CarInfoBox.style";
import { Link } from "react-router-dom";
import formatAttribute from "utils/formatAttribute";

function CarInfoBox({ attribute: { brand, name, segment, fuelType, imageUrl }, amount, id }) {
  console.log(imageUrl);
  return (
    <S.Wrapper>
      <Link to={`/detail/${id}`}>
        <S.InnerWrapper>
          <S.AttributeWrapper>
            <S.TextWrapper>
              <S.MainAttribute>{brand}</S.MainAttribute>
              <S.MainAttribute>{name}</S.MainAttribute>
            </S.TextWrapper>
            <S.TextWrapper>
              <S.SubAttribute>
                {formatAttribute(segment)} / {formatAttribute(fuelType)}
              </S.SubAttribute>
              <S.SubAttribute>월 {amount.toLocaleString("ko-KR")} 원 부터</S.SubAttribute>
            </S.TextWrapper>
          </S.AttributeWrapper>
          <S.ImageWrapper>
            <S.ButtonWrapper>
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
            </S.ButtonWrapper>
            
          </S.ImageWrapper>
        </S.InnerWrapper>
      </Link>
    </S.Wrapper>
  );
}

export default CarInfoBox;
