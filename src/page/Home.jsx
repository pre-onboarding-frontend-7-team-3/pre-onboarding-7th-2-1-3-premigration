import React, { useContext, useEffect } from "react";
import { getCarList } from "../api/car";
import Header from "../component/common/Header";
import CarInfoContainer from "../component/Home/CarInfoContainer";
import Filter from "../component/Home/Filter";
import { dispatchContext } from "../context/CarContext";

const Home = () => {
  const dispatch = useContext(dispatchContext);
  useEffect(() => {
    getCarList().then((res) => {
      dispatch({ type: "GET", data: res.data.payload });
    });
  }, []);
  return (
    <div>
      <Header />
      <Filter />
      <CarInfoContainer />
    </div>
  );
};

export default Home;
