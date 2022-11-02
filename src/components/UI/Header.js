import styled from "styled-components";

const Header = () => {
  const pathName = window.location.pathname;

  return (
    <HeaderContainer>
      {pathName === "/" ? <span>전체차량</span> : <span>상세정보</span>}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: green;
  width: 100vw;
  height: 10vh;
`;
