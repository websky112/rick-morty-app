import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_FAILED,
  LOAD_CHARACTERS_SUCCESS,
  TOGGLE_CHARACTER,
  TOGGLE_CHARACTER_FAILED,
  TOGGLE_CHARACTER_SUCCESS
} from './actions'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  sendLoadRequest,
  sendToggleRequest
} from './api'

function * loadCharacters () {
  try {
    const characters = yield call(sendLoadRequest)
    yield put({ type: LOAD_CHARACTERS_SUCCESS, characters })
  } catch (error) {
    yield put({ type: LOAD_CHARACTERS_FAILED, error })
  }
}

function * toggleCharacter (action) {
  try {
    const character = yield call(sendToggleRequest, action.id)
    yield put({ type: TOGGLE_CHARACTER_SUCCESS, character })
  } catch (error) {
    yield put({ type: TOGGLE_CHARACTER_FAILED, error })
  }
}

function * charactersSaga () {
  yield takeLatest(LOAD_CHARACTERS, loadCharacters)
  yield takeLatest(TOGGLE_CHARACTER, toggleCharacter)
}

export default charactersSaga
