import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* AGE_UP_ASYNC() {
  yield delay(1000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export default function* mySaga() {
  yield takeEvery("AGE_UP", AGE_UP_ASYNC);
}
