import { combineReducers } from 'redux'
import { timeLine as Home } from './Home'

const user = (state={user: 'juejin'}, action) => {
	switch (action.type) {
		case 'LIST':
			return {...state, ...action.data}
		default:
			return state;
	}
}

export default combineReducers({
	Home
})