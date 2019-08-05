import * as picalApis from "../apis/pical";
import * as picalConstants from "../constants/actionsTypes";
// export const requestPosts = () => ({
//   type: ActionsTypes.PICAL_IMAGES
// });
export const fetchPical = () => {
  return {
    type: picalConstants.PICAL_IMAGES
  };
};

export const fetchPicalSuccess = data => {
  return {
    type: picalConstants.PICAL_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchPicalFail = error => {
  return {
    type: picalConstants.PICAL_FAIL,
    payload: {
      error
    }
  };
};

export const fetchPicalRequest = () => {
  return dispatch => {
    dispatch(fetchPical());
    picalApis
      .getPical()
      .then(reps => {
        const { data } = reps;
        dispatch(fetchPicalSuccess(data));
      })
      .catch(error => {
        dispatch(fetchPicalFail(error));
      });
  };
};
