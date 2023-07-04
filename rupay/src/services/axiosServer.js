import axios from 'axios';
import {parseCookies} from 'nookies'



export function getApiClient(ctx) {
    const {'session': token} = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:8000/'
    });


    if(token){
        api.defaults.headers['Authorization'] = token;
    }
return api
}