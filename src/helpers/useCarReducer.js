export const CAR_ACTION_TYPES = {
  GET_CAR_LIST_SUCCESS: "GET_CAR_LIST_SUCCESS",
  GET_CAR_LIST_LOADING: "GET_CAR_LIST_LOADING",
  GET_CAR_LIST_ERROR: "GET_CAR_LIST_ERROR",

  FIND_CAR_DETAIL: "FIND_CAR_DETAIL",
};

export const carReducer = (state, action) => {
  switch (action.type) {
    case CAR_ACTION_TYPES.GET_CAR_LIST_LOADING:
      return { ...state, loading: true };
    case CAR_ACTION_TYPES.GET_CAR_LIST_SUCCESS:
      return { ...state, carList: [...action.cars], loading: false };
    case CAR_ACTION_TYPES.GET_CAR_LIST_ERROR:
      return { ...state, loading: false, error: true };
    case CAR_ACTION_TYPES.FIND_CAR_DETAIL:
      break;
    default:
      throw new Error("Error in action type");
  }
};
