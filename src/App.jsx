import CarContextWrapper from "./context/CarContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./page/Home";
import Detail from "./page/Detail";
import styled from 'styled-components'
function App() {
  return (
    <GlobalStlye>
    <CarContextWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </Router>
    </CarContextWrapper>
    </GlobalStlye>
  );
}

export default App;

const GlobalStlye = styled.div`
  width: 460px;
  margin:0 auto;

`