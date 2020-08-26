import {fork } from 'redux-saga/effects'
import {loginFlow} from './authenSaga'
import {dataBookingSaga} from './dataSaga'
import {createBookingSaga, getBookingSaga, updateBookingSaga, pageChange} from './bookingSaga'
import init from './initializeSaga'

export default function* watchSagas() {
    yield fork(loginFlow)
    yield fork(init)
    yield fork(dataBookingSaga)
    yield fork(createBookingSaga)
    yield fork(updateBookingSaga)
    yield fork(getBookingSaga)
    yield fork(pageChange)
}