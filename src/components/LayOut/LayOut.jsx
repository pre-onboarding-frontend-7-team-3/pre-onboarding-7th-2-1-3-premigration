import { Outlet } from "react-router-dom";

import { LayOutHeader } from "./LayOut.style";
import Icon from "../common/Icon";

function LayOut({ children }) {
  return (
    <div>
      {/* FIXME */}
      {/* 상세 페이직 추가되면 경우에 따라 뒤로가기 버튼을 동작하게 하여 추가 */}
      {/* <Icon icon="Arrow" /> */}
      <LayOutHeader>전체 차량</LayOutHeader>
      {children || <Outlet />}
    </div>
  );
}

export default LayOut;
