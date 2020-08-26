import types from '../actionTypes'
export function loginRequest(params) {
    return {
        type: types.AUTHEN_TYPES.LOGIN,
        payload: params
    }
}

export function loginSuccess(value) {
    return {
        type: types.AUTHEN_TYPES.LOGIN_SUCCESS,
        payload: value
    }
}

export function loginFailed(err) {
    return {
        type: types.AUTHEN_TYPES.LOGIN_FAILED,
        payload: err
    }
}

export function loadAuthen(value) {
    return {
        type: types.AUTHEN_TYPES.LOAD_AUTHEN,
        payload: value
    }
}

export function logout() {
    return {
        type: types.AUTHEN_TYPES.LOGOUT
    }
}