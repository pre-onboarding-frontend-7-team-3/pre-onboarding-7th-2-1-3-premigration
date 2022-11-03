import { CarContextWrapper } from "context/CarContext";
import NavContextWrapper from "context/NavContext";
import { useMediaQuery } from "react-responsive";
import { Home, Detail, Error } from "pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 451 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 450, minWidth: 360 });
    return isMobile ? children : null;
  };
  return (
    <CarContextWrapper>
      <NavContextWrapper>
        <Desktop>
          <h1>화면을 줄여 이용해주세요</h1>
        </Desktop>
        <Mobile>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Mobile>
      </NavContextWrapper>
    </CarContextWrapper>
  );
};

export default App;
