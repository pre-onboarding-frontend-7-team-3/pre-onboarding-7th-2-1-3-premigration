import React from "react";
import styled from "@emotion/styled";

const Loading = () => {
  return <LoadingGuide>불러오는 중</LoadingGuide>;
};

export default Loading;

export const LoadingGuide = styled.div`
  width: 100%;
  min-height: 360px;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
`;
