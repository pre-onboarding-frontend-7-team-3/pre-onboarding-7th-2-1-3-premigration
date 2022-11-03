import LayOut from "components/LayOut";
import CarContextWrapper from "context/CarContext";
import NavContextWrapper from "context/NavContext";
import { useMediaQuery } from "react-responsive";
import { Home, Detail } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 451 });

  if (isDesktop) {
    return <h1>화면을 줄여 이용해주세요</h1>;
  }

  return (
    <CarContextWrapper>
      <NavContextWrapper>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </NavContextWrapper>
    </CarContextWrapper>
  );
}

export default App;
