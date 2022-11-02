import { useState } from "react";
import { NavWrapper } from "./Nav.style";
import { NAV_ITEM_DATA } from "./NavData";
import NavItem from "./NavItem";

function Nav() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <NavWrapper>
      {NAV_ITEM_DATA.map(({ text, segment, fuelType }, idx) => {
        return (
          <NavItem
            key={idx}
            text={text}
            segment={segment}
            fuelType={fuelType}
            idx={idx}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
    </NavWrapper>
  );
}

export default Nav;
