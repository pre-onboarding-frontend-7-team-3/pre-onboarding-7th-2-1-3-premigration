import { CarContext } from "context/CarContext";
import { useContext } from "react";
import { NavItemStyle, NavButton } from "./Nav.style";

function NavItem({ text, type, idx, selectedCategory, setSelectedCategory }) {
  const { getCars } = useContext(CarContext);

  const handleNavBox = () => {
    getCars({ segment: type });
    setSelectedCategory(idx);
    console.log("nav type", type);
  };
  return (
    <NavItemStyle>
      <NavButton onClick={handleNavBox} idx={idx} selectedCategory={selectedCategory}>
        {text}
      </NavButton>
    </NavItemStyle>
  );
}

export default NavItem;
