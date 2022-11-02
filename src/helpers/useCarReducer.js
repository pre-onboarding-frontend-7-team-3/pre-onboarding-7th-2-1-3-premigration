export const carReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return { ...state, carList: [...action.cars] };
    case "FIND":
      break;

    default:
      break;
  }
};
