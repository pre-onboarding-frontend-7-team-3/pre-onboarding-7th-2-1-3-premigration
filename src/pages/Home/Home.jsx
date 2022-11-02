import CarList from "components/CarList";
import Nav from "components/Nav";
import { CarContext } from "context/CarContext";
import { useContext, useEffect } from "react";

function Home() {
  const {
    carState: { carList },
    isLoading,
    errorMessage,
    getCars,
  } = useContext(CarContext);

  return (
    <section>
      <Nav />
      {isLoading ? <p>loading...</p> : <CarList carList={carList} />}
    </section>
  );
}

export default Home;
