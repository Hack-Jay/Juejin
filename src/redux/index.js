import { combineReducers } from 'redux'
import { timeLine } from './Home'
import { post } from './Post'
import { user } from './User'

export default combineReducers({
	timeLine,
  post,
  user
})
