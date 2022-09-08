import { all } from "redux-saga/effects";
import { groupsSaga } from "./groups";
import { authSaga } from "./auth";

export default function* rootSaga() {
  yield all([
    // ...sagas
    groupsSaga(),
    authSaga(),
  ]);
}