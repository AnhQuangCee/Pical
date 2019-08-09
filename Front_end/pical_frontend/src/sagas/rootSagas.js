import { fork, take, call, put } from "redux-saga/effects";
import * as picalTypes from "../constants/actionsTypes";
import { getPical } from "../apis/pical";
import { STATUS_CODE } from "../constants/Config";
import { fetchPicalFail, fetchPicalSuccess } from "../actions/pical";
import { showLoading, hideLoading } from "../actions/ui";

function* watchFetchPicalActions() {
  while (true) {
    yield take(picalTypes.PICAL_IMAGES);
    yield put(showLoading());
    const resp = yield call(getPical);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchPicalSuccess(data));
      yield put(hideLoading());
    } else {
      yield put(fetchPicalFail(data));
      yield put(hideLoading());
    }
    // console.log("reps", resp);
  }
}

function* watchCreatePicalActions() {
  yield true;
  // console.log("create fetch");
}
function* rootSaga() {
  yield fork(watchFetchPicalActions);
  yield fork(watchCreatePicalActions);
}
export default rootSaga;
