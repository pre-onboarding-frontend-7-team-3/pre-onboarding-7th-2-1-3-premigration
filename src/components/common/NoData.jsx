import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
`;

const NoData = () => {
  return <Wrapper>차량이 없습니다.</Wrapper>;
};

export default NoData;
