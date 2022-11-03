import React from "react";
import styled from "styled-components";

const NoneCar = () => {
  return <NoneCarList>차량이 없습니다</NoneCarList>;
};

export default NoneCar;

export const NoneCarList = styled.div`
  width: 100vw;
  min-height: 360px;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
`;
