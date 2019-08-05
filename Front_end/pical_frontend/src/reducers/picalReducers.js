import * as picalConstants from "../constants/actionsTypes";
// Create Reducers
const picalInitialState = {
  pical: []
};

const allReducer = (state = picalInitialState, action) => {
  switch (action.type) {
    case picalConstants.PICAL_IMAGES:
      return {
        ...state,
        pical: []
      };
    case picalConstants.PICAL_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        pical: data
      };
    case picalConstants.PICAL_FAIL:
      return {
        ...state,
        pical: []
      };
    default:
      return state;
  }
};
export default allReducer;
