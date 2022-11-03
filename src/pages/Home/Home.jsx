import CarList from "components/CarList";
import Header from "components/Header";
import Nav from "components/Nav";
import { useCarState } from "../../context/CarContext";
import Loading from "components/common/Loading/Loading";
import { HEADER_DATA } from "constants/HeaderData";

function Home() {
  const {
    carState: { carList, loading },
  } = useCarState();

  return (
    <section style={{ width: "100%" }}>
      <Header title={HEADER_DATA.CAR_LIST}/>
      <Nav />
      {loading ? <Loading /> : <CarList carList={carList} />}
    </section>
  );
}

export default Home;
