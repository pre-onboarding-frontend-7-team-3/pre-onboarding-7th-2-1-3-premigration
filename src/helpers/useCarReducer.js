export const carReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, carList: [...action.cars] };
    case "FIND":
      break;

    default:
      break;
  }
};
