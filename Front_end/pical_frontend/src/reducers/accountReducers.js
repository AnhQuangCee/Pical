import * as accountConstants from "../constants/account";

const accountInitialState = {
  account: []
};

const reducer = (state = accountInitialState, action) => {
  switch (action.type) {
    case accountConstants.PICAL_ACCOUNT:
      return {
        ...state,
        account: []
      };
    case accountConstants.PICAL_ACCOUNT_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        account: data
      };
    case accountConstants.PICAL_ACCOUNT_FAIL:
      return {
        ...state,
        account: []
      };

    // ADD USER
    case accountConstants.ADD_USER:
      return {
        ...state
      };
    case accountConstants.ADD_USER_SUCCESS:
      // const { data } = action.payload;
      return {
        ...state
        // account: data
      };
    case accountConstants.ADD_USER_FAIL:
      return {
        ...state
        // account: []
      };
    default:
      return state;
  }
};

export default reducer;
