import { getPost } from '../../api/post'

const TimeLineList = 'GETTIMELINELIST'
const addTodo = 'ADDTODO'

const initialState = {
	timelineList: [],
	num: 0
}
const addTimeLineList = (data) => {
	console.log('action commming	');
	return {
		type: TimeLineList,
		data
	}
}
const addTodos = () => {
	return {
		type: addTodo,
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
	addTodos
}