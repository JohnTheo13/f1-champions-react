import { put } from "redux-saga/effects";

import { updateSearchTerm } from "./actions";

export default function* watchAll() {
  yield put(updateSearchTerm("payload"));
}
