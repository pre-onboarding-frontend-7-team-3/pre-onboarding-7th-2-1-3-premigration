import { useCarState } from "../../context/CarContext";
import { NavItemStyle } from "./Nav.style";

function NavItem({ text, type }) {
  const { getCars } = useCarState();

  const handleNavBox = () => {
    getCars({ segment: type });
    console.log("nav type", type);
  };
  return <NavItemStyle onClick={handleNavBox}>{text}</NavItemStyle>;
}

export default NavItem;
