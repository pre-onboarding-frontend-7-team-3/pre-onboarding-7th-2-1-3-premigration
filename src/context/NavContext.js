import { useContext, createContext, useMemo, useState } from "react";

export const NavContext = createContext("");

const NavContextWrapper = ({ children }) => {
  const [navScrollXIdx, setNavScrollXIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const value = useMemo(
    () => ({ navScrollXIdx, setNavScrollXIdx, selectedCategory, setSelectedCategory }),
    [navScrollXIdx, selectedCategory],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavContextWrapper;

export const useNavContext = () => {
  const state = useContext(NavContext);
  if (!state) {
    throw new Error("Error finding NavContext");
  }
  return state;
};
