import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Catagories from "../components/Catagories";
import CarData from "../components/CarData";
import { FilterProvider } from "../contexts/filterContext";

const Main = () => {
  return (
    <>
      <FilterProvider>
        <MainLayout>
          <Header />
          <Catagories />
          <CarData />
        </MainLayout>
      </FilterProvider>
    </>
  );
};

export default Main;

export const MainLayout = styled.div`
  max-width: 1440px;
  min-width: 390px;
  height: 100vh;
  z-index: 100;
`;
