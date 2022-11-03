import { NavContext } from "context/NavContext";
import { useContext, useEffect, useRef, useState } from "react";
import { NavWrapper } from "./Nav.style";
import { NAV_ITEM_DATA } from "./NavData";
import NavItem from "./NavItem";

function Nav() {
  const navWrapperRef = useRef(null);
  const [navItemWidth, setNavItemWidth] = useState(0);
  const { navScrollXIdx, setNavScrollXIdx, selectedCategory, setSelectedCategory } = useContext(NavContext);

  useEffect(() => {
    navWrapperRef.current.scrollTo(navItemWidth * navScrollXIdx, 0);
  }, [navWrapperRef, navItemWidth]);

  useEffect(() => {
    const navItemWidth = navWrapperRef.current.firstChild.clientWidth;
    setNavItemWidth(navItemWidth);
  }, [navWrapperRef]);

  return (
    <NavWrapper ref={navWrapperRef}>
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
            setNavScrollXIdx={setNavScrollXIdx}
          />
        );
      })}
    </NavWrapper>
  );
}

export default Nav;
