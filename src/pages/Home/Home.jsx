import { getCars } from "apis";
import Nav from "components/Nav";
import { CarContext } from "context/CarContext";
import { useContext, useEffect } from "react";

function Home() {
  const { carList, isLoading, errorMessage, getCars } = useContext(CarContext);

  return (
    <section>
      <Nav />
      {isLoading ? <p>loading...</p> : ""}
    </section>
  );
}

export default Home;
