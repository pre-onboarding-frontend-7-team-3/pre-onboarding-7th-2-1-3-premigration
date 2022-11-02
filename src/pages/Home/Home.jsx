import CarList from "components/CarList";
import Nav from "components/Nav";
import { useCarState } from "../../context/CarContext";

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
