import LayOut from "components/LayOut";
import CarContextWrapper from "context/CarContext";
import { useMediaQuery } from "react-responsive";
import { Home, Detail } from "pages";
import { Route, Routes } from "react-router-dom";

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
    <CarContextWrapper>
      <Desktop>
        <h1>화면을 줄여 이용해주세요</h1>
      </Desktop>
      <Mobile>
        <Desktop>
          <h1>화면을 줄여 이용해주세요</h1>
        </Desktop>
        <Mobile>
          <Routes>
            <Route element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail:id" element={<Detail />} />
            </Route>
          </Routes>
        </Mobile>
      </Mobile>
    </CarContextWrapper>
  );
}

export default App;
