import { createContext, useMemo, useState } from "react";

export const NavContext = createContext("");

function NavContextWrapper({ children }) {
  const [navScrollXIdx, setNavScrollXIdx] = useState(0);

  const value = useMemo(() => ({ navScrollXIdx, setNavScrollXIdx }), [navScrollXIdx]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export default NavContextWrapper;
