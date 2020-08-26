import types from '../actionTypes'
const COMMON_TYPES = types.COMMON_TYPES;

const initialize_reducer = {
    page: 1,
    visibleModal: false,
    error: '',
    loading: false,
    totalPage: 1
}

export default function reducer(state = initialize_reducer, action) {
    switch(action.type) {
        case COMMON_TYPES.PAGE_SELECTED:
            return {...state, page: action.payload}
        case COMMON_TYPES.TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case COMMON_TYPES.MODAL_CLOSE:
            return {...state, visibleModal: false}
        case COMMON_TYPES.MODAL_OPEN:
            return {...state, visibleModal: true}
        case COMMON_TYPES.SPIN_SHOW:
            return {...state, loading: true}
        case COMMON_TYPES.SPIN_HIDE:
            return {...state, loading: false}
        case COMMON_TYPES.ERROR:
            return {...state, error: action.payload.msg}
        default:
            return state;
    }
}