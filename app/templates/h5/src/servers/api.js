import axios from 'axios'

// 客户端发送请求
axios.interceptors.request.use(
  config => {
    config.headers.common['authorization'] = localStorage.getItem('token') || ''
    config.headers.common['accountId'] = '125'
    return config
  },
  err => {
    return Promise.reject(err)
  })

// 服务端响应
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
export function getHotList(data) {
  return getData('hot_list', data);
}

