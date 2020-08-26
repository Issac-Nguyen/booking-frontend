import axios from 'axios'
import config from '../config'

export function loadBooking(page, token) {
    const configs = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get(config.url + '/booking?page=' + page,{},configs)
    .then(response => {
        if(response.data) {
            return response.data
        }
        return response;
    })
}