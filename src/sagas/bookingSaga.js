import { call, put, select, take } from 'redux-saga/effects'
import types from '../actionTypes'
import services from '../services'
import actions from '../actions'

export function* createBookingSaga() {
    while(true) {
        try {
            const {payload} = yield take(types.BOOKING_TYPES.BOOKING_CREATE);
            const state = yield select();
            yield put(actions.appActions.error({msg: ''}))
            yield put(actions.appActions.spinner(true))
            const result = yield call(services.createBookingService, payload, state.authen.token);
            if(result.success) {
                yield put(actions.bookingAtions.bookingCreateSuccessfull(result.data));
                const result1 = yield call(getBooking);
                yield put(actions.bookingAtions.bookingReceived(result1.data));
                yield put(actions.appActions.modal(false))
            } else {
                yield put(actions.appActions.error({msg: result.msg}))
            }
            yield put(actions.appActions.spinner(false))
        } catch(err) {
            console.error(err);
            
        }
    }
}

function* getBooking() {
    try {
        const state = yield select();
        const result = yield call(services.loadBooking, state.app.page, state.authen.token);
        return result;
    } catch(err) {
        yield put(actions.bookingAtions.bookingRequestFailed(err))
        throw err;
    }
}

export function* getBookingSaga() {
    while(true) {
        try {
            const {payload} = yield take(types.BOOKING_TYPES.BOOKING_REQUEST);
            const result = yield call(getBooking);
            if(result.success) {
                yield put(actions.appActions.totalPage(result.data.totalItems))
                yield put(actions.bookingAtions.bookingReceived(result.data));
            } else {
                console.error(result.msg)
            }
            
        } catch(err) {
            console.error(err);
            yield put(actions.appActions.error(err))
        }
    }
}

export function* pageChange() {
    while(true) {
        try {
            const {payload} = yield take(types.COMMON_TYPES.pageChange);
            yield put(actions.appActions.changePage(payload))
            yield put(actions.appActions.error({msg: ''}))
            yield put(actions.appActions.spinner(true))
            const result = yield call(getBooking);
            if(result.success) {
                yield put(actions.appActions.totalPage(result.data.totalItems))
                yield put(actions.bookingAtions.bookingReceived(result.data));
            } else {
                yield put(actions.appActions.error({msg: result.msg}))
            }
            yield put(actions.appActions.spinner(false))
        } catch(err) {
            console.error(err);
            yield put(actions.appActions.error(err))
        }
    }
}

export function* updateBookingSaga() {
    while(true) {
        try {
            const {payload} = yield take(types.BOOKING_TYPES.BOOKING_UPDATE);
            yield put(actions.appActions.error({msg: ''}))
            yield put(actions.appActions.spinner(true))
            const state = yield select();
            const result = yield call(services.updateBookingService, payload, state.authen.token);
            if(result.success) {
                const result1 = yield call(getBooking);
                yield put(actions.bookingAtions.bookingReceived(result1.data));
                yield put(actions.appActions.modal(false))
            } else {
                yield put(actions.appActions.error({msg: result.msg}))
            }
            yield put(actions.appActions.spinner(false))
        } catch(err) {
            console.error(err);
            yield put(actions.appActions.error(err))
        }
    }
}