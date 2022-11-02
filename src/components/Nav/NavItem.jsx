import { NavItemStyle } from "./Nav.style";

function NavItem({ text, type }) {
  // const {getCars}
  const handleNavBox = () => {
    console.log("nav type", type);
  };
  return <NavItemStyle onClick={handleNavBox}>{text}</NavItemStyle>;
}

export default NavItem;
