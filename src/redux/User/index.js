import loginReq from '../../api/user'

const Login = 'LOGIN'

// 存放当前文章详情
const initialState = {
  user: {},
  token: '',
  clientId: '',
  userId: ''
}

const LoginInfo = (payload) => {
  return {
    type: Login,
    payload
  }
}

const login = (params) => {
  return dispatch => {
    loginReq(params).then(res => {
      console.log('action res', res)
      dispatch(LoginInfo(res))
    })
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export {
  login,
  user,
}
