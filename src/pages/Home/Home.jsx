import { useContext } from "react";

import { CarContext } from "context/CarContext";

import CarList from "components/CarList";
import Nav from "components/Nav";
import { useCarState } from "../../context/CarContext";
import Loading from "components/common/Loading";

function Home() {
  const {
    carState: { carList, loading },
  } = useCarState();

  return (
    <section>
      <Nav />
      {loading ? <p>loading...</p> : <CarList carList={carList} />}
    </section>
  );
}

export default Home;
