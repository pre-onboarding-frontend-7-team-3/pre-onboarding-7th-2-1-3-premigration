import React from "react";
import styled from "styled-components";

import Button from "@/components/common/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;

  gap: 8px;
  padding: 0 12px;

  background-color: whitesmoke; ;
`;

const Category = () => {
  return (
    <Wrapper>
      <Button
        borderRadius="62px"
        padding="5px 18px"
        backgroundColor={(props) => props.theme.GRAY}
        color={(props) => props.theme.BLACK}
      >
        버튼
      </Button>
    </Wrapper>
  );
};

export default Category;
