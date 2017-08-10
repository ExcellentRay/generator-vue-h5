import Vue from 'vue'
import axios from 'axios'


// 客户端
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })


axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
