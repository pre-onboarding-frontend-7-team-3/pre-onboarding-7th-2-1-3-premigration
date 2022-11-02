import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { LayOutHeader } from "./LayOut.style";

function LayOut({ children }) {
  return (
    <div>
      <LayOutHeader>전체 차량</LayOutHeader>
      {children || <Outlet />}
    </div>
  );
}

export default LayOut;
