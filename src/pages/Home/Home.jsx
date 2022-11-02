import CarList from "components/CarList";
import Header from "components/Header";
import Nav from "components/Nav";
import { CarContext } from "context/CarContext";
import { useContext, useEffect } from "react";

function Home() {
  const {
    carState: { carList },
    isLoading,
    errorMessage,
  } = useContext(CarContext);

  return (
    <section style={{ width: "100%" }}>
      <Nav />
      {isLoading ? <p>loading...</p> : <CarList carList={carList} />}
    </section>
  );
}

export default Home;
