import React from "react";
import styled from "styled-components";
const NewTag = () => {
  return <NewTagContainer>신규</NewTagContainer>;
};

export default NewTag;

export const NewTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 150px;
  width: 52px;
  height: 22px;
  background-color: ${(props) => props.theme.style.blue};
  color: white;
  font-weight: 700;
  font-size: 12px;
  border-radius: 42px;
  margin: 20px 0 0 105px;
`;
