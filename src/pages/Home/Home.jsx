import CarList from "components/CarList";
import Header from "components/Header";
import Nav from "components/Nav";
import { useCarState } from "../../context/CarContext";
import Loading from "components/common/Loading/Loading";

function Home() {
  const {
    carState: { carList, loading },
  } = useCarState();

  return (
    <section style={{ width: "100%" }}>
      <Header title="전체차량" header />
      <Nav />
      {loading ? <Loading /> : <CarList carList={carList} />}
    </section>
  );
}

export default Home;
