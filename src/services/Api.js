import { create } from 'apisauce';
// import { store } from '../App';
// import { removeToken } from '../actions/authAction';
import baseUrl from '../config';

const api = create({
  baseURL: `${baseUrl.devUrl}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  withCredentials: true,
  timeout: 30000,
});


// Add a request interceptor
// api.axiosInstance.interceptors.request.use((config) => {
//   const { token } = store.getState().auth;
//   return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
// });

// // Add a response interceptor
// api.axiosInstance.interceptors.response.use((response) => response, (error) => {
//   // Do something with response error
//   if (error.response.status === 401) {
//     window.alert('Something went wrong!. Please login again');  //eslint-disable-line
//     // window.location.reload();
//     store.dispatch(removeToken());
//     window.location.href = '/#/login';
//   }
//   return Promise.reject(error.response);
// });


export function login(params) { return api.post('/users/sign-in', params); }
export function getUserDetail(params = {}) { return api.get('/users/detail', params); }
export function getUserList(params = {}) { return api.get('/users', params); }
