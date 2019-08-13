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

// ADD USER
export const addUser = (username, email, password) => {
  return {
    type: accountConstants.ADD_USER,
    payload: {
      username,
      email,
      password
    }
  };
};

export const addUserSucess = data => {
  return {
    type: accountConstants.ADD_USER_SUCCESS,
    payload: {
      data
    }
  };
};

export const addUserFail = error => {
  return {
    type: accountConstants.ADD_USER_FAIL,
    payload: {
      error
    }
  };
};
