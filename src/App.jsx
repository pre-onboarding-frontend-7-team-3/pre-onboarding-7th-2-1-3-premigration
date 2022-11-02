import LayOut from "components/LayOut";
import CarContextWrapper from "context/CarContext";
import { Home, Detail } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <CarContextWrapper>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </CarContextWrapper>
  );
}

export default App;
