import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CarInfoBox = ({ car }) => {
  return (
    <Link to={`detail/${car.id}`}>
      <CarInfoBoxWrapper>
        <div className="left">
          <div className="brand-name">
            <p>{car.attribute.brand}</p>
            <p>{car.attribute.name}</p>
          </div>
          <div>{car.attribute.segment}</div>
          <div>{car.attribute.fuelType}</div>
          <div>{car.amount}</div>
        </div>
        <div className="img">
          <img src={car.attribute.imageUrl} />
        </div>
      </CarInfoBoxWrapper>
    </Link>
  );
};

export default CarInfoBox;

const CarInfoBoxWrapper = styled.li`
  width: 100%;
  height: 120px;
  border: 1px solid black;
  .left {
    .brand-name {
      font-weight: bold;
      color: black;
    }
    .segment {
    }
    .fuelType {
    }
  }
  .img {
    background-color: var(--light-gray);
    object-fit: contain;
    height:80px;
    width:150px;
  }
`;
