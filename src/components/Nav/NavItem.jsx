import { NavItemStyle, NavButton } from "./Nav.style";
import { useCarState } from "../../context/CarContext";

function NavItem({
  text,
  segment,
  fuelType,
  idx,
  selectedCategory,
  setSelectedCategory,
  setNavScrollXIdx,
}) {
  const { getCars } = useCarState();

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
