export const carReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, carList: [...action.cars] };
    case "FIND":
      return {
        ...state,
        selectedCar: [
          state.carList.find((car) => {
            return car.id === parseInt(action.id);
          }),
        ],
      };

    default:
      break;
  }
};
