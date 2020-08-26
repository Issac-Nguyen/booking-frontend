import axios from 'axios'
import config from '../config'

export function createBookingService(params, token) {
    const configs = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    return axios.post(config.url + '/book',
    params,
    configs).then(response => {
        if(response.data) {
            return response.data
        }
        return response;
    })
    
}