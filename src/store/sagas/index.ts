import { all } from 'redux-saga/effects';

import { locationSaga } from 'store/location/saga';

export function* rootSaga() {
  yield all([locationSaga()]);
}
