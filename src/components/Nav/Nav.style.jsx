import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 450px;
  gap: 20px;

  padding: 8px 0;

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

  margin: 0 12px;

  cursor: pointer;
`;

export { NavWrapper, NavItemStyle };
