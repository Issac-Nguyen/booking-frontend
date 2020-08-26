import axios from 'axios';
import config from '../config'

export function login(params) {
    const {username, password} = params;
    return axios.post(config.url + '/login', {
        username,
        password
    }).then(response => {
        if(response.data) {
            return response.data
        }
        return response;
    })
}