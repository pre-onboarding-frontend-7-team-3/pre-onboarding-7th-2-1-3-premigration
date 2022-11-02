import { useState } from "react";
import { NavWrapper } from "./Nav.style";
import { NavData } from "./NavData";
import NavItem from "./NavItem";

function Nav() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <NavWrapper>
      {NavData.map(({ text, type }, idx) => {
        return (
          <NavItem
            key={idx}
            text={text}
            type={type}
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
