const axios = require('axios')

const instance = axios.create({
  // timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  // Do something before request is sent

  const token = localStorage.getItem('token') || ''
  const clientId = localStorage.getItem('clientId') || ''
  const userId = localStorage.getItem('userId') || ''
  const paramsData = {
    uid: userId,
    device_id: clientId,
    token,
  }
  // 有token时带上登录参数
  let params = token ? { ...paramsData, src: 'web' } : { src: 'web' }
  config.headers["X-Juejin-Uid"] = userId
  config.headers["X-Juejin-Token"] = token
  config.headers["X-Juejin-Src"] = "web"
  config.headers["X-Juejin-Client"] = clientId

  if(config.method == 'post') {
    config.data = {
      ...config.data,
      ...params
    }
  }
  if(config.method === 'get') {
    config.params = {
      ...params,
      ...config.params
    }
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default instance
