import { Routes, Route } from "react-router-dom";

import Main from "@/pages/Main";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default RouteComponent;
