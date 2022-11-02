import LayOut from "../src/components/LayOut/LayOut";
import CarContextWrapper from "context/CarContext";
import { Home, Detail } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <CarContextWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </CarContextWrapper>
  );
}

export default App;
