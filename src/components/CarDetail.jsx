import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useFilter } from "../contexts/filterContext";

const CarDetail = ({ id }) => {
  const { cars } = useFilter();
  const data = cars[id - 1];
  console.log(cars);

  useEffect(() => {}, []);
  return (
    <>
      <CarDetailImgContainer>
        <CarDetailImg src={data?.attribute.imageUrl} />
      </CarDetailImgContainer>
      <DetailBrandName>
        {data?.attribute.brand}
        <br />
        {data?.attribute.name}
      </DetailBrandName>
      <DetailCarInfoText>{data?.amount}</DetailCarInfoText>
      <DetailCarInfoTitle>차량정보</DetailCarInfoTitle>
      <DetailCarInfoText>차종 : {data?.attribute.segment}</DetailCarInfoText>
      <DetailCarInfoText>연료 : {data?.attribute.fuelType}</DetailCarInfoText>
      <DetailCarInfoText>이용 가능일 : {data?.startDate}</DetailCarInfoText>
      <DetailCarInfoTitle>보험</DetailCarInfoTitle>
      <DetailCarInfoText>
        {data?.insurance[0]?.name} {data?.insurance[0]?.description}
      </DetailCarInfoText>
      <DetailCarInfoText>
        {data?.insurance[1]?.name} {data?.insurance[1]?.description}
      </DetailCarInfoText>
      <DetailCarInfoTitle>추가상품</DetailCarInfoTitle>
      <DetailCarInfoText>
        {data?.additionalProducts[0]?.name} 월{data?.additionalProducts[0]?.amount}
      </DetailCarInfoText>
      <CarDetailMargin />
    </>
  );
};

export default CarDetail;

export const CarDetailImgContainer = styled.div`
  width: 100%;
  heigth: 205px;
`;

export const CarDetailImg = styled.img`
  width: 100%;
  heigth: 100%;
`;

export const DetailBrandName = styled.div`
  height: 92px;
`;

export const DetailCarInfoTitle = styled.div`
  height: 48px;
  background-color: ${(props) => props.theme.style.blue};
  color: white;
`;

export const DetailCarInfoText = styled.div`
  height: 48px;
`;

export const CarDetailMargin = styled.div`
  height: 100px;
`;
