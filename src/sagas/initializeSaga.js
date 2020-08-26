import { call, put, take } from 'redux-saga/effects'
import actions from '../actions'
import types from '../actionTypes'
import services from '../services'
import config from '../config'

const storage = services.storage;

export default function* initSaga() {
    while(true) {
        try {
            yield take(types.AUTHEN_TYPES.INIT_AUTHEN);
            const dataAuthen = storage.get(config.authenKey);
            if(dataAuthen)
                yield put(actions.authenActions.loadAuthen(dataAuthen));
        } catch(err) {
            console.log(err)
        }
    }
}