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
    default:
      return state;
  }
};

export default reducer;
