import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 451 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 450 });
    return isMobile ? children : null;
  };
  return (
    <BrowserRouter>
      <Desktop>
        <h1>화면을 줄여 이용해주세요</h1>
      </Desktop>
      <Mobile>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail:id" element={<Detail />} />
        </Routes>
      </Mobile>
    </BrowserRouter>
  );
}

export default App;
