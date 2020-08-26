import { call, put, take } from 'redux-saga/effects'
import actions from '../actions'
import types from '../actionTypes'
import services from '../services'
import config from '../config'

export function* dataBookingSaga() {
    while(true) {
        try {      
        yield take(types.BOOKING_TYPES.BOOKING_DATA);
        const data = yield call(services.getData);
        yield put(actions.bookingAtions.bookingDataReceived(data))
        } catch(err) {
            console.log(err);
            yield put(actions.appActions.error(err))
        }
    }
}