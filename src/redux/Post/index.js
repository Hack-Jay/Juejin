import { getDetail } from '../../api/post'

const DetailList = 'POSTLIST'
const DetailUserInfo = 'DETAILUSERINFO'

// 存放当前文章详情
const initialState = {
	postId: '',
	info: {},
	content: ''
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
function getPostDetail(id) {
	return dispatch => {
		getDetail(id).then(res=> {
			dispatch(addPostList(id, res))
		}).catch(err=> {
			console.error(err)
		})
	}
}

function getUserInfo(id) {
	return dispatch => {
		getDetail(id, false).then(res => {
			dispatch(addPostUserInfo(res))
		}).catch(err => console.error(err))
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
				info: {...action.data}
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