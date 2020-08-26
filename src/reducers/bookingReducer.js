import types from '../actionTypes'
const BOOKING_TYPES = types.BOOKING_TYPES;

const initialize_reducer = {
    bookings: [],
    selected_booking: null,
    events: [],
    status: []
}

export default function reducer(state = initialize_reducer, action) {
    switch(action.type) {
        case BOOKING_TYPES.BOOKING_RECEIVED:
            return {...state, bookings: action.payload.bookings}    
        case BOOKING_TYPES.BOOKING_SELECTED:
            return {...state, selected_booking: action.payload}    
        case BOOKING_TYPES.BOOKING_DATA_RECEIVED:
            return {...state, events: action.payload.events, status: action.payload.statuses}
        default:
            return state;
    }
}