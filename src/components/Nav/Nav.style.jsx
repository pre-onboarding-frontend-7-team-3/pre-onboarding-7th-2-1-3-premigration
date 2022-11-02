import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  gap: 10px;

  padding: 2vw 3vw;

  border-bottom: 1px solid ${(props) => props.theme.BLACK};

  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 400px) {
    justify-content: flex-start;
  }
`;

const NavItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export { NavWrapper, NavItemStyle };
