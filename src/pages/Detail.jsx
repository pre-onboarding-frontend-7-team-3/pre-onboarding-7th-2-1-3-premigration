import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import CarDetail from "../components/CarDetail";
import { FilterProvider } from "../contexts/filterContext";

const Detail = () => {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <FilterProvider>
        <DetailLayout>
          <Header />
          <CarDetail id={id} />
        </DetailLayout>
      </FilterProvider>
    </>
  );
};

export default Detail;

export const DetailLayout = styled.div`
  max-width: 1440px;
  height: auto;
  border: 1px solid black;
`;
