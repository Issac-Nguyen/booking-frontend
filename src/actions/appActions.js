import types from '../actionTypes'

export function modal(payload) {
    return {
        type: payload ? types.COMMON_TYPES.MODAL_OPEN : types.COMMON_TYPES.MODAL_CLOSE
    }
}

export function spinner(payload) {
    return {
        type: payload ? types.COMMON_TYPES.SPIN_SHOW : types.COMMON_TYPES.SPIN_HIDE
    }
}

export function error(payload) {
    return {
        type: types.COMMON_TYPES.ERROR,
        payload
    }
}

export function pageChange(payload) {
    return {
        type: types.COMMON_TYPES.PAGE_CHANGE,
        payload
    }
}

export function changePage(payload) {
    return {
        type: types.COMMON_TYPES.PAGE_SELECTED,
        payload
    }
}

export function totalPage(payload) {
    return {
        type: types.COMMON_TYPES.TOTAL_PAGE,
        payload
    }
}