const carReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, cars: [...action.data] };
    case "SET_FILTER":
      return { ...state, filter: action.data };
    default:
      return state;
  }
};

export default carReducer;
