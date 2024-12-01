import axios from 'axios';
import { toast } from 'react-toastify';


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8081/api/v1'
});

// // Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN123';

instance.defaults.withCredentials = true;



// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error && error.response && error.response.status || 500;
    // switch (status) {
    //     case 401: toast.error(error.response.data.EM)
    //     case 403: toast.error(error.response.data.EM);
    // }
    // return Promise.reject(error);
    return error.response.data;
});

export default instance;