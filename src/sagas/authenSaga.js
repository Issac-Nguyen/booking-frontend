import { call, put, take, delay } from 'redux-saga/effects'
import actions from '../actions'
import types from '../actionTypes'
import services from '../services'

export function* loginFlow() {
    while(true) {
        try {
            const {payload} = yield take(types.AUTHEN_TYPES.LOGIN);
            yield put(actions.appActions.error({msg: ''}))
            yield put(actions.appActions.spinner(true))
            const result = yield call(services.login, payload);
            if(result.success) {
                yield put(actions.authenActions.loginSuccess(result.data))
            } else {
                yield put(actions.appActions.error({msg: result.msg}))
                if(result.action == 'logout') {
                    delay(500);
                    yield put(actions.authenActions.logout())
                }
            }
            yield put(actions.appActions.spinner(false))
        } catch(err) {
            yield put(actions.appActions.spinner(false))
            // yield put(actions.authenActions.loginFailed(err))
            yield put(actions.appActions.error(err))
        }
    }
    
}