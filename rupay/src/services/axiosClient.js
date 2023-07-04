// import axios from 'axios';
// import {parseCookies} from 'nookies'

import { getApiClient } from "./axiosServer";



// const {'RUpay.token': token} = parseCookies();

// export const api = axios.create({
//     baseURL: 'http://localhost:8000/'
// });


// api.interceptors.request.use(async config => {
//     console.log(config)
//     return config;

// })

// if(token){
//     api.defaults.headers['Authorization'] = `${token}`;
// }

export const api = getApiClient()