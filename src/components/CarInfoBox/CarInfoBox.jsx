import * as Style from "./CarInfoBox.style";
import { Link } from "react-router-dom";
import Button from "components/common/Button";
import isNew from "utils/isNew";
import { memo } from "react";
import { carInfoConverter } from "utils/carInfoConverter";

function CarInfoBox({
  attribute: { brand, name, fuelType, segment, imageUrl },
  amount,
  id,
  startDate,
}) {
  return (
    <Style.Wrapper>
      <Link to={`/detail/${id}`} state={{ idx: "1" }}>
        <Style.InnerWrapper>
          <Style.AttributeWrapper>
            <Style.TextWrapper>
              <Style.MainAttribute>{brand}</Style.MainAttribute>
              <Style.MainAttribute>{name}</Style.MainAttribute>
            </Style.TextWrapper>
            <Style.TextWrapper>
              <Style.SubAttribute>
                {carInfoConverter[fuelType]} / {carInfoConverter[segment]}
              </Style.SubAttribute>
              <Style.SubAttribute>월 {amount.toLocaleString()}원 부터</Style.SubAttribute>
            </Style.TextWrapper>
          </Style.AttributeWrapper>
          <Style.ImageWrapper url={imageUrl}>
            {/* <img width="100%" alt={brand} src={imageUrl} /> */}

            {isNew(startDate) && (
              <Style.ButtonWrapper>
                (
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
                )
              </Style.ButtonWrapper>
            )}
          </Style.ImageWrapper>
        </Style.InnerWrapper>
      </Link>
    </Style.Wrapper>
  );
}

export default memo(CarInfoBox);
