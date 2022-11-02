import { CarContext } from "context/CarContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const {
    carState: { carList },
    isLoading,
    errorMessage,
    getCars,
  } = useContext(CarContext);
  const { id } = useParams();
  const [carInfo, setCarInfo] = useState({});

  useEffect(() => {
    if (isLoading) {
      getCars();
    } else {
      for (let car of carList) {
        if (car.id === parseInt(id)) {
          setCarInfo(car);
        }
      }
    }
  }, [isLoading]);

  return <div>{isLoading ? "로딩중입니다" : <div>{carInfo.id}</div>}</div>;
}

export default Detail;
