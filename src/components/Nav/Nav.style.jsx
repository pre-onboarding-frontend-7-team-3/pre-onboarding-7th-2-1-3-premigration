import styled from "styled-components";
import { css } from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 92%;
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
`;

const NavButton = styled.button`
  width: 62px;
  height: 27px;

  border-radius: 62px;

  font-weight: 700;
  font-size: 14px;
  font-weight: 700;

  ${({ theme, selectedCategory, idx }) =>
    css`
      background-color: ${idx === selectedCategory ? theme.BLACK : theme.GRAY};
      color: ${idx === selectedCategory ? theme.GRAY : theme.BLACK};
    `}

  cursor: pointer;
`;

export { NavWrapper, NavItemStyle, NavButton };
