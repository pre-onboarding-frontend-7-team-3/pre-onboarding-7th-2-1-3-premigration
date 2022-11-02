import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { LayOutHeader } from "./LayOut.style";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 450px;
`;

function LayOut({ children }) {
  return (
    <Wrapper>
      <LayOutHeader>전체 차량</LayOutHeader>
      {children || <Outlet />}
    </Wrapper>
  );
}

export default LayOut;
