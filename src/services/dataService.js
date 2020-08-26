import axios from 'axios';
import config from '../config'

export function getData() {
    return axios.get(config.url + '/dataBook').then(response => {
        if(response.data) {
            return response.data
        }
        return response;
    })
}