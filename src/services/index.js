import {login} from './loginService'
import {getData} from './dataService'
import {createBookingService} from './createService'
import {updateBookingService} from './updateService'
import {loadBooking} from './loadBookingService'
import * as storage from './storage'

export default {
    login,
    storage,
    getData,
    createBookingService,
    updateBookingService,
    loadBooking
}