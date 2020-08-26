import types from '../actionTypes'
import services from '../services'
import config from '../config'

const AUTHEN_TYPES = types.AUTHEN_TYPES;
const storage = services.storage;

const initialize_reducer = {
    login: false,
    role: 'anonymous',
    token: '',
    username: ''
}

export default function reducer(state = initialize_reducer, action) {
    switch(action.type) {
        case AUTHEN_TYPES.LOGIN_SUCCESS:
            storage.set(config.authenKey, {role: action.payload.role, token: action.payload.token, username: action.payload.username});
            return {...state, login: true, role: action.payload.role, token: action.payload.token, username: action.payload.username};
        case AUTHEN_TYPES.LOGIN_FAILED:
            return {...state, login: false, role: 'anynomous', token: '', username: ''}
        case AUTHEN_TYPES.LOAD_AUTHEN:
            let {login, role, token, username} = action.payload;
            login = token ? true : false;
            role = role || 'anonymous';
            token = token || null;
            username = username || '';
            return {...state, login, role, token, username};
        case AUTHEN_TYPES.LOGOUT:
            storage.remove(config.authenKey);
            return {...state, login: false, role: 'anynomous', token: '', username: ''}
        default:
            return state;
    }
}