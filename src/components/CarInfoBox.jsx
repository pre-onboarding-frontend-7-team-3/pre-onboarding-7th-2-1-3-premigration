import React from "react";
import styled from "styled-components";

import Button from "@/components/common/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

  width: 100%;
  height: 120px;

  border-bottom: 1px solid black;
  background-color: ${(props) => props.WHITE};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  max-width: 160px;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;

  width: 150px;
  height: 100px;

  background-color: red;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const CarInfoBox = ({ carInfo }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <MainInfo>
          <span>brand</span>
          <span>name</span>
        </MainInfo>
        <SubInfo>
          <span>class Type / fuel Type</span>
          <span>amount</span>
        </SubInfo>
      </TextWrapper>
      <ImageWrapper>
        <ButtonWrapper>
          <Button
            width="52px"
            height="22px"
            fontSize="12px"
            borderRadius="42px"
            backgroundColor={(props) => props.theme.BLUE}
            color={(props) => props.theme.WHITE}
          >
            신규
          </Button>
        </ButtonWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

export default CarInfoBox;
