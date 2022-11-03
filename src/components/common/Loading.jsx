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

const Loading = () => {
  return <Wrapper>불러오는 중</Wrapper>;
};

export default Loading;
