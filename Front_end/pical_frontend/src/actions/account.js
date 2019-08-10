import * as accountConstants from "../constants/account";

export const fetchAccount = () => {
  return {
    type: accountConstants.PICAL_ACCOUNT
  };
};

export const fetchAccountSucess = data => {
  return {
    type: accountConstants.PICAL_ACCOUNT_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchAccountFail = error => {
  return {
    type: accountConstants.PICAL_ACCOUNT_FAIL,
    payload: {
      error
    }
  };
};
