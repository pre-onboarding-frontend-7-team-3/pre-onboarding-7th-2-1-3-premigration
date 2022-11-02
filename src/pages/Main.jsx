import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Catagories from "../components/Catagories";
import useCarData from "../useCarData";
// import { FilterProvider } from "../contexts/FilterContext";

const Main = () => {
  return (
    <>
      <MainLayout>
        <Header />
        {/* <FilterProvider> */}
        <Catagories />
        {/* carList data 불러오는 함수 */}
        {useCarData()}
        {/* </FilterProvider> */}
      </MainLayout>
    </>
  );
};

export default Main;

export const MainLayout = styled.div`
  max-width: 1440px;
  min-width: 390px;
  height: 100vh;
  border: 1px solid black;
`;
