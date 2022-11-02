import { NavWrapper } from "./Nav.styled";
import { NavData } from "./NavData";
import NavItem from "./NavItem";

function Nav() {
  return (
    <NavWrapper>
      {NavData.map(({ text, type }, idx) => {
        return <NavItem key={idx} text={text} type={type} />;
      })}
    </NavWrapper>
  );
}

export default Nav;
