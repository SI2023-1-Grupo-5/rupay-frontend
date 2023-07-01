import axios from 'axios';
// import {parseCookies} from 'nookies'

// const {'RUpay.token': token} = parseCookies();

export const api = axios.create({
    baseURL: 'http://localhost:8000/'
});


// if(token){
    // api.defaults.headers['Authorization'] = `Bearer ${token}`;
// }