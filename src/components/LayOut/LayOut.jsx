import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { LayOutHeader, Wrapper } from "./LayOut.style";

function LayOut({ children }) {
  return (
    <Wrapper>
      <LayOutHeader>전체 차량</LayOutHeader>
      {children || <Outlet />}
    </Wrapper>
  );
}

export default LayOut;
