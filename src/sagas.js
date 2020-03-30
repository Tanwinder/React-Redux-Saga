import { all, fork } from 'redux-saga/effects'

import todosaga from './container/Todo/saga'

// export default function* rootSaga() {
//     yield all([
//         fork(todosaga)
//     ])
// }
export default todosaga;