import { CarContext } from "context/CarContext";
import { useContext } from "react";
import { NavItemStyle } from "./Nav.style";

import Button from "../common/Button";

function NavItem({ text, type }) {
  const { getCars } = useContext(CarContext);
  const handleNavBox = () => {
    getCars({ segment: type });
    console.log("nav type", type);
  };
  return (
    <NavItemStyle>
      <Button borderRadius="62px" onClick={handleNavBox}>
        {text}
      </Button>
    </NavItemStyle>
  );
}

export default NavItem;
