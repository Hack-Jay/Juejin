import instance from  '../../config'

// 手机号登录
const loginReq = (params) => {
  return instance.post('/login/phoneNumber', {
    ...params
  }).then(res => {
    return res.data
  })
}

export default loginReq
