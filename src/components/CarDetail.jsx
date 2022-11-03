import styled from "@emotion/styled";
import React from "react";
import { useFilter } from "../contexts/filterContext";
import convertDateFormat from "../utils/convertDateFormat";

const CarDetail = ({ id }) => {
  const { cars } = useFilter();
  const data = cars[id - 1];

  return (
    <>
      <CarDetailImgContainer>
        <CarDetailImg src={data?.attribute.imageUrl} />
      </CarDetailImgContainer>
      <DetailBrandName>
        <Brand>{data?.attribute.brand}</Brand>
        <br />
        <Name>{data?.attribute.name}</Name>
      </DetailBrandName>
      <DetailCarInfoText>
        <Amount>월 {data?.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Amount>
      </DetailCarInfoText>
      <DetailCarInfoTitle>차량정보</DetailCarInfoTitle>
      <DetailCarInfoText>차종 {data?.attribute.segment}</DetailCarInfoText>
      <DetailCarInfoText>연료 {data?.attribute.fuelType}</DetailCarInfoText>
      <DetailCarInfoText>이용 가능일 {convertDateFormat(data?.startDate)}</DetailCarInfoText>
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
  margin-left: 20px;
`;

export const Brand = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const Amount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 22px;
`;

export const DetailCarInfoTitle = styled.div`
  height: 48px;
  background-color: ${(props) => props.theme.style.blue};
  color: white;
  font-weight: 700;
  font-size: 17px;
  display: flex;
  align-items: center;
`;

export const CarInfo = styled.div`
  margin-left: 20px;
`;

export const DetailCarInfoText = styled.div`
  height: 48px;
`;

export const CarDetailMargin = styled.div`
  height: 100px;
`;
