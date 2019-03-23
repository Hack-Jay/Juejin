import {
  getDetail,
  getComment
} from '../../api/post'

const DetailList = 'POSTLIST'
const DetailUserInfo = 'DETAILUSERINFO'
const Comment = 'COMMENT'

// 存放当前文章详情
const initialState = {
  postId: '',
  objectId: '',
  info: {},
  content: '',
  comment: {}
}

const addPostList = (id, data) => {
  return {
    type: DetailList,
    id,
    data
  }
}

const addPostUserInfo = (data) => {
  return {
    type: DetailUserInfo,
    data
  }
}

const addComment = (data) => {
  return {
    type: Comment,
    data
  }
}

function getPostDetail(id) {
  return dispatch => {
    getDetail(id).then(res => {
      dispatch(addPostList(id, res))
    })
  }
}

// 获取详情页用户信息后获取评论
function getUserInfo(id) {
  return (dispatch,getState) => {
    getDetail(id, false).then(res => {
      dispatch(addPostUserInfo(res))
    }).then(res => {
      console.log('res ' , res, getState())
      const objectId = getState().post.objectId
      return getComment(objectId)
    }).then(res => {
        dispatch(addComment(res))
    })
  }
}


const post = (state = initialState, action) => {
  switch (action.type) {
    case DetailList:
      return {
        ...state,
        postId: action.id,
        content: action.data.transcodeContent
      }
    case DetailUserInfo:
      return {
        ...state,
        objectId: action.data.objectId,
        info: {
          ...action.data
        }
      }
    case Comment:
      return {
        ...state,
        comment: action.data
      }
    default:
      return state
  }
}

export {
  getPostDetail,
  getUserInfo,
  post,
}
