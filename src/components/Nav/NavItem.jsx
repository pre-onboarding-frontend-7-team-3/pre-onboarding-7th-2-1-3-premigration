import { CarContext } from "context/CarContext";
import { useContext } from "react";
import { NavItemStyle } from "./Nav.style";

function NavItem({ text, type }) {
  const { getCars } = useContext(CarContext);
  const handleNavBox = () => {
    getCars({ segment: type });
    console.log("nav type", type);
  };
  return <NavItemStyle onClick={handleNavBox}>{text}</NavItemStyle>;
}

export default NavItem;
