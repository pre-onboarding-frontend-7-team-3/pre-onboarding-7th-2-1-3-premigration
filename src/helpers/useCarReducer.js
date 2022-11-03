import { CAR_ACTION_TYPES } from "constants/CarActionTypes";

export const carReducer = (state, action) => {
  switch (action.type) {
    case CAR_ACTION_TYPES.GET_CAR_LIST_LOADING:
      return { ...state, loading: true, error: false };
    case CAR_ACTION_TYPES.GET_CAR_LIST_SUCCESS:
      return { ...state, carList: [...action.cars], loading: false, error: false };
    case CAR_ACTION_TYPES.GET_CAR_LIST_ERROR:
      return { ...state, loading: false, error: true };
    case CAR_ACTION_TYPES.FIND_CAR_DETAIL:
      return { ...state, selectedCar: state.carList.find((car) => car.id === parseInt(action.id)) };
    default:
      throw new Error("Error in action type");
  }
};
