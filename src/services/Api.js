import { create } from 'apisauce';
// import { store } from '../App';
// import { removeToken } from '../actions/authAction';
import baseUrl from './config';

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


export function getFeatureProducts(params) { return api.get('/get-products?isFeatured=true', params); }
export function getNewProducts(params) { return api.get('/get-products?isFeatured=false', params); }
export function getDetailProducts(productId, params = {}) { return api.get(`/product/${productId}`, params); }
export function getProductComments(productId, params = {}) { return api.get(`/get-product-comments/${productId}`, params); }
export function createComment(params) { return api.post(`/create-comment`, params); }
export function getCategory(params = {}) { return api.get(`/get-categories`, params); }
