import CarList from "components/CarList";
import Nav from "components/Nav";
import { useCarState } from "../../context/CarContext";

function Home() {
  const {
    carState: {
      carList: { data, loading,error },
    },
  } = useCarState();
  return (
    <section>
      <Nav />
      {loading ? <p>loading...</p> : <CarList carList={data} />}
    </section>
  );
}

export default Home;
