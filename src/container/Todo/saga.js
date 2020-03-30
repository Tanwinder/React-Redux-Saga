import { fork, all, take, put, delay } from "redux-saga/effects";
// import { delay } from 'redux-saga'

import { addItemAsync } from './types'


function* additem() {
        while(true) {
            const {item } = yield take('ADD_ITEM');
            yield put({type: 'LOADING'})
            yield delay(3000);
            yield put(addItemAsync(item));
        }
}

export default function* todosaga() {
    yield all([
        fork(additem)
    ])
}