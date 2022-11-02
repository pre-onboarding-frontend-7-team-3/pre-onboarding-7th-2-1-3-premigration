import { Home, Detail } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
