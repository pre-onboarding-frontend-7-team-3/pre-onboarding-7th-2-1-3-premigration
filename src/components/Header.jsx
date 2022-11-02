import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return <HeaderContainer>전체차량</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
`;
