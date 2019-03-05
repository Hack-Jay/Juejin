import { getPost } from '../../api/post'

const TimeLineList = 'GETTIMELINELIST'

const initialState = {
	timelineList: [],
	num: 0
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
	
		default:
			return state
	}
}

export {
	getTimeLineList,
	timeLine,
}