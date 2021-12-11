import { all, takeLatest, call, put } from 'redux-saga/effects'

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions'

import ShopActionTypes from './shop.types'

import { collection, getDocs } from 'firebase/firestore'

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = collection(firestore, 'collections')
    const snapshot = yield getDocs(collectionRef)
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.massage))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
