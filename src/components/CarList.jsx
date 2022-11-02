import { React } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import NewTag from "./NewTag";

const CarList = ({ car }) => {
  // const createdAt = car.createdAt
  console.log(car.id);
  return (
    <Link to={`/${car.id}`}>
      <CarListContainer>
        <CarDetailForText>
          <BrandAndName>
            {car.attribute.brand}
            <br />
            {car.attribute.name}
          </BrandAndName>
          <SegmentAndPayment>
            {car.attribute.segment === "ㅊ"
              ? (car.attribute.segment = "대형")
              : car.attribute.segment === "D"
              ? (car.attribute.segment = "중형")
              : (car.attribute.segment = "소형")}
            / {car.attribute.fuelType}
            <br />월 {car.amount} 원 부터
          </SegmentAndPayment>
        </CarDetailForText>
        <CarImgContainer>
          {<NewTag />}
          <CarImg src={car.attribute.imageUrl} />
        </CarImgContainer>
      </CarListContainer>
    </Link>
  );
};

export default CarList;

export const CarListContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: 700;
  font-size: 17px;
`;

export const CarDetailForText = styled.div``;

export const BrandAndName = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

export const SegmentAndPayment = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 12px;
`;

export const CarImgContainer = styled.div`
  width: 152px;
  heigth: 80px;
`;

export const CarImg = styled.img`
  width: 100%;
  heigth: auto;
`;