import { getDetail } from '../../api/post'

const DetailList = 'GETTIMELINELIST'

const initialState = {
	post: [],
}
const addTimeLineList = (data) => {
	return {
		type: TimeLineList,
		data
	}
}
function getTimeLineList() {
	console.log('comming')
	return dispatch => {
		getPost().then(res=> {
			dispatch(addTimeLineList(res))
		}).catch(err=> {
			throw err
		})
	}
}

const timeLine = (state = initialState, action) => {
	switch (action.type) {
		case TimeLineList:
			return {
				...state,
				timelineList: action.data
			}
		case addTodo: 
			return {
				...state,
				num: state.num + 1
			}
		default:
			return state
	}
}

export {
	getTimeLineList,
	timeLine,
}