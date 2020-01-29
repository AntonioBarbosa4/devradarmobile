import axios from 'axios';

const api = axios.create({
    baseURL: ' https://dev-radarbackend.herokuapp.com'
});

export default api;