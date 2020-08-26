import types from '../actionTypes'

export function createBooking(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_CREATE,
        payload: payload
    }
}

export function bookingReceived(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_RECEIVED,
        payload: payload
    }
}

export function bookingCreateSuccessfull(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_CREATE_SUCCESSFULL,
        payload
    }
}

export function bookingCreateFailed(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_CREATE_FAILED,
        payload
    }
}

export function bookingRequestFailed(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_REQUEST_FAILED,
        payload: payload
    }
}

export function bookingDataReceived(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_DATA_RECEIVED,
        payload: payload
    }
}

export function bookingDataRequest() {
    return {
        type: types.BOOKING_TYPES.BOOKING_DATA
    }
}

export function bookingRequest(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_REQUEST,
        payload
    }
}

export function bookingSelected(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_SELECTED,
        payload
    }
}

export function bookingUpdate(payload) {
    return {
        type: types.BOOKING_TYPES.BOOKING_UPDATE,
        payload
    }
}