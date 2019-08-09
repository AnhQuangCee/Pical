import * as types from "../constants/ui";

const InitialState = {
  showLoading: false
};
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.SHOW_GLOBAL_LOADING: {
      return {
        ...state,
        showLoading: true
      };
    }

    case types.HIDE_GLOBAL_LOADING: {
      return {
        ...state,
        showLoading: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
