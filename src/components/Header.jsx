import React from "react";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import backIcon from "../images/backIcon.svg";

const Header = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isMain = currentURL;
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      {isMain === "/" ? " " : <GotoMainIcon src={backIcon} onClick={goMain}></GotoMainIcon>}
      {isMain === "/" ? "전체차량" : "상세차량"}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
`;

const GotoMainIcon = styled.img`
  position: absolute;
  left: 25px;
`;
