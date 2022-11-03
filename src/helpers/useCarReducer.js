import { reducerUtils } from "utils/reducerUtils";

export const CAR_ACTION_TYPES = {
  GET_CAR_LIST_SUCCESS: "GET_CAR_LIST_SUCCESS",
  GET_CAR_LIST_LOADING: "GET_CAR_LIST_LOADING",
  GET_CAR_LIST_ERROR: "GET_CAR_LIST_ERROR",

  GET_CAR_DETAIL: "GET_CAR_DETAIL",
};

export const carReducer = (state, action) => {
  switch (action.type) {
    case CAR_ACTION_TYPES.GET_CAR_LIST_LOADING:
      return { ...state, carList: reducerUtils.loading() };
    case CAR_ACTION_TYPES.GET_CAR_LIST_SUCCESS:
      return { ...state, carList: reducerUtils.success(action.cars) };
    case CAR_ACTION_TYPES.GET_CAR_LIST_ERROR:
      return { ...state, carList: reducerUtils.error(action.error) };
    case CAR_ACTION_TYPES.GET_CAR_DETAIL:
      break;
    default:
      throw new Error("Error in action type");
  }
};
