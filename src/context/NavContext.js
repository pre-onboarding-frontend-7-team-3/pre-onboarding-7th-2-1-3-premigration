import { createContext, useMemo, useState } from "react";

export const NavContext = createContext("");

function NavContextWrapper({ children }) {
  const [navScrollXIdx, setNavScrollXIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const value = useMemo(
    () => ({ navScrollXIdx, setNavScrollXIdx, selectedCategory, setSelectedCategory }),
    [navScrollXIdx, selectedCategory],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export default NavContextWrapper;
