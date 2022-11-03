import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CarDetail from "../components/CarDetail";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  return (
    <>
      <DetailLayout>
        <Header />
        <CarDetail id={params.id} />
      </DetailLayout>
    </>
  );
};

export default Detail;

export const DetailLayout = styled.div`
  max-width: 1440px;
  height: auto;
  border: 1px solid black;
`;
