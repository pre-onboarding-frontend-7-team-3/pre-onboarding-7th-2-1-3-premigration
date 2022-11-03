import { CarContext } from "../../context/CarContext";
import { useContext } from "react";
import { NavItemStyle, NavButton } from "./Nav.style";

function NavItem({
  text,
  segment,
  fuelType,
  idx,
  selectedCategory,
  setSelectedCategory,
  setNavScrollXIdx,
}) {
  const { getCars } = useContext(CarContext);

  const handleNavBox = () => {
    getCars({ fuelType, segment });
    setSelectedCategory(idx);
    setNavScrollXIdx(idx);
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
