import React from "react";
import styled from "@emotion/styled";
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

      <DetailCarInfoText>
        <div>차종</div> <div>{data?.attribute.segment}</div>
      </DetailCarInfoText>

      <DetailCarInfoText>
        <div>연료</div> {data?.attribute.fuelType}
      </DetailCarInfoText>
      <DetailCarInfoText>
        <div>이용 가능일</div>
        <div>{convertDateFormat(data?.startDate)}</div>
      </DetailCarInfoText>
      <DetailCarInfoTitle>보험</DetailCarInfoTitle>
      <DetailCarInfoText>
        <div>{data?.insurance[0]?.name} </div>
        <div>{data?.insurance[0]?.description}</div>
      </DetailCarInfoText>
      <DetailCarInfoText>
        <div>{data?.insurance[1]?.name}</div>
        <div> {data?.insurance[1]?.description}</div>
      </DetailCarInfoText>
      <DetailCarInfoTitle>추가상품</DetailCarInfoTitle>
      <DetailCarInfoText>
        <div>{data?.additionalProducts[0]?.name}</div>{" "}
        <div>월{data?.additionalProducts[0]?.amount}</div>
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
  background: #0094ff;
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
  font-weight: 700;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarDetailMargin = styled.div`
  height: 100px;
`;

export const DetailStyleDiv = styled.div`
  display: flex;
`;
