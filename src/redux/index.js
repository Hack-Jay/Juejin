import { combineReducers } from 'redux'
import { timeLine } from './Home'
import { post } from './Post'

export default combineReducers({
	timeLine,
	post
})