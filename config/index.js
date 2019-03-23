const axios = require('axios')

const instance = axios.create({
  // timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers["X-Juejin-Uid"] = "59bb865a51882536d37f054c"
  config.headers["X-Juejin-Token"] = "eyJhY2Nlc3NfdG9rZW4iOiJEcTdIZ1dXYVBrZzJyd2syIiwicmVmcmVzaF90b2tlbiI6InlVS2RtakZBWVZTSzBVM04iLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D"
  config.headers["X-Juejin-Src"] = "web"
  config.headers["X-Juejin-Client"] = "1551751322906"
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default instance
