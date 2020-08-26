import axios from 'axios'
import config from '../config'

export function updateBookingService(params, token) {
    const configs = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    return axios.put(config.url + '/book',
    params,
    configs).then(response => {
        if(response.data) {
            return response.data
        }
        return response;
    })
    
}