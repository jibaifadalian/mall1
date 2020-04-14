import axios from 'axios';
export function http(config) {
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/h8",
    // baseURL:"http://123.207.32.32:8000/api/h8"
  })
  instance.interceptors.request.use(config => {
    return config;
  },err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data;
  },err => {
    console.log(err);
  })
  return instance(config);
}