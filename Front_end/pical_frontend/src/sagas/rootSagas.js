import { fork, take, call, put, delay, takeEvery } from "redux-saga/effects";
import * as picalTypes from "../constants/actionsTypes";
import { getPical, getAccount, addUser } from "../apis/pical";
import { STATUS_CODE } from "../constants/Config";
import { fetchPicalFail, fetchPicalSuccess } from "../actions/pical";
import { showLoading, hideLoading } from "../actions/ui";
import * as accountTypes from "../constants/account";
import {
  fetchAccountSucess,
  fetchAccountFail,
  addUserSucess,
  addUserFail
} from "../actions/account";

function* watchFetchPicalActions() {
  while (true) {
    yield take(picalTypes.PICAL_IMAGES);
    const resp = yield call(getPical);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchPicalSuccess(data));
    } else {
      yield put(fetchPicalFail(data));
    }
    // console.log("reps", resp);
  }
}

function* watchCreatePicalActions() {
  yield true;
  // console.log("create fetch");
}
function* watchFetchAccount() {
  while (true) {
    yield take(accountTypes.PICAL_ACCOUNT);
    yield put(showLoading());
    const reps = yield call(getAccount);
    const { status, data } = reps;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchAccountSucess(data));
      yield delay(1000);
      yield put(hideLoading());
    } else {
      yield put(fetchAccountFail(data));
      yield delay(1000);
      yield put(hideLoading());
    }
  }
}

// ADD_USER
function* addUserAccount({ payload }) {
  yield put(showLoading());
  const { username, email, password } = payload;
  // console.log(payload);

  const resp = yield call(addUser, {
    username,
    email,
    password
  });
  const { status, data } = resp;

  if (status === STATUS_CODE.CREATED) {
    yield put(addUserSucess(data));
    yield put(hideLoading());
  } else {
    yield put(addUserFail(data));
    yield put(hideLoading());
  }
}
function* rootSaga() {
  yield takeEvery(accountTypes.ADD_USER, addUserAccount);
  yield fork(watchFetchPicalActions);
  yield fork(watchCreatePicalActions);
  yield fork(watchFetchAccount);
}
export default rootSaga;
