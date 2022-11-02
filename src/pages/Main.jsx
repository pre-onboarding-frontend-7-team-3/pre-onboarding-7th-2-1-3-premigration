import React from "react";
import styled from "styled-components";

import Header from "@/components/Header";
import Category from "@/components/Category";
import CarInfoBox from "@/components/CarInfoBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Category />

      <CarInfoBox />
    </Wrapper>
  );
};

export default Main;
