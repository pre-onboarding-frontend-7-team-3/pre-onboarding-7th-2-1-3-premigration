import React, { useContext } from "react";
import { carContext } from "../../context/CarContext";
import CarInfoBox from "./CarInfoBox";
import styled from 'styled-components'
const CarInfoContainer = () => {
  const carInfoList = useContext(carContext);

  const filteredCarInfoList = carInfoList.cars.filter((car)=>
    carInfoList.filter === "ALL" || car.attribute.segment === carInfoList.filter 
  ).map((car) => {
      return <CarInfoBox car={car} key={car.id} />;
    }
  );
  
  return <CarInfoContinerSection>
    
    { filteredCarInfoList.length ? filteredCarInfoList : "차량이 없습니다."}
    
    </CarInfoContinerSection>;
};

export default CarInfoContainer;

const CarInfoContinerSection = styled.section`
  margin-top: 100px;
  list-style:none;
`