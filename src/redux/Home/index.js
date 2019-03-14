import { getPost } from '../../api/post'

const TimeLineList = 'GETTIMELINELIST'
const LoadMore = 'LOADMORE'

const initialState = []
const addTimeLineList = (data) => {
	return {
		type: TimeLineList,
		data
	}
}

function getTimeLineList() {
	return dispatch => {
		getPost().then(res=> {
			dispatch(addTimeLineList(res))
		}).catch(err=> {
			throw err
		})
	}
}

// 获取上一条的rankIndex
const getLastItem = (state) => {
  const item = state[state.length - 1]
  return item.rankIndex
}
// 加载更多
const getMoreList = () => {
  return (dispatch, getState) => {
    const { timeLine } = getState()
    const data = {
      before: getLastItem(timeLine)
    }
    getPost(data).then(res => {
      // console.log('res is ', res)
      dispatch(addTimeLineList(res))
    }).catch(err => console.error(err))
  }
}

const timeLine = (state = initialState, action) => {
	switch (action.type) {
    case TimeLineList:
    case LoadMore:
			return [
				...state,
				...action.data
      ]
		default:
			return state
	}
}

export {
  getTimeLineList,
  getMoreList,
	timeLine,
}
