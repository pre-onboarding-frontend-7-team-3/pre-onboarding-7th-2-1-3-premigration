import { NavData } from "./NavData";
import NavItem from "./NavItem";

import { NavWrapper } from "./Nav.style";

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
