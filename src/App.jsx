import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
