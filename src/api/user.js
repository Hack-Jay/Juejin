import instance from  '../../config'

// 手机号登录
const loginReq = (params) => {
  return instance.post('/login/phoneNumber', {
    ...params
  }).then(res => {
    localStorage.setItem('user', res.data.user)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userId', res.data.userId)
    localStorage.setItem('clientId', res.data.clientId)
    return res.data
  })
}

export default loginReq
