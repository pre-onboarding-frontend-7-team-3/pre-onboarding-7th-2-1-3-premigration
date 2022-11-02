import { CarContext } from "context/CarContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [carInfo, setCarInfo] = useState(null);

  const {
    carState: { selectedCar },
    findCarsHandler,
  } = useContext(CarContext);

  console.log(id);

  useEffect(() => {
    findCarsHandler(id);
    setCarInfo(selectedCar);
  }, []);
  return (
    <div>
      {carInfo && (
        <>
          <div>
            {carInfo[0].attribute.brand}
            {carInfo[0].attribute.name}
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
