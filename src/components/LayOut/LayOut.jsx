import { Outlet } from "react-router-dom";
import { LayOutHeader } from "./LayOut.styled";

function LayOut({ children }) {
  return (
    <>
      <LayOutHeader>전체차량</LayOutHeader>
      {children || <Outlet />}
    </>
  );
}

export default LayOut;
