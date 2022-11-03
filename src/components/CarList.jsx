import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewTag from "./NewTag";
import forSpiltNumber from "../utils/forSplitNumber";
import newCheckedData from "../utils/newCheckedData";

const CarList = ({ car }) => {
  const createdAt = newCheckedData(car.createdAt);

  const [tagToogle, setTagToogle] = useState(false);

  if (!createdAt) {
    setTagToogle((pre) => !pre);
  }
  console.log();

  return (
    <Link key={car.id} to={`/${car.id}`}>
      <CarListContainer>
        <CarDetailForText>
          <BrandAndName>
            {car.attribute.brand}
            <br />
            {car.attribute.name}
          </BrandAndName>
          <SegmentAndPayment>
            {car.attribute.segment === "E"
              ? (car.attribute.segment = "대형")
              : car.attribute.segment === "D"
              ? (car.attribute.segment = "중형")
              : car.attribute.segment === "C"
              ? (car.attribute.segment = "소형")
              : (car.attribute.segment = "SUV")}
            /
            {car.attribute.fuelType === "gasoline"
              ? (car.attribute.fuelType = "가솔린")
              : car.attribute.fuelType === "ev"
              ? (car.attribute.fuelType = "전기")
              : (car.attribute.fuelType = "하이브리드")}
            <br />월 {forSpiltNumber(car.amount)} 원 부터
          </SegmentAndPayment>
        </CarDetailForText>
        <CarImgContainer>
          {!tagToogle && <NewTag />}
          <CarImg src={car.attribute.imageUrl} />
        </CarImgContainer>
      </CarListContainer>
    </Link>
  );
};

export default CarList;

export const CarListContainer = styled.article`
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
