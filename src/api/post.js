import instance from '../../config'

const getPost = (data) => {
	return instance.get('/timeline/get_entry_by_rank', {
		params: {
      ...data,
			// device_id: '1551751322906',
			// src: 'web',
			// uid: '59bb865a51882536d37f054c',
			// token: 'eyJhY2Nlc3NfdG9rZW4iOiJvbHFqVDlLY1BsZ0JUM3NOIiwicmVmcmVzaF90b2tlbiI6InlWM3Y5ZEZaOHB4M0szZzgiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
			limit: 20,
      category: 'all',
      // 推荐列表
      // recomment: 1,
		}
	}).then(res => {
		if(res.data.m === 'ok') {
      console.log('post success')
			return res.data.d.entrylist
		}
	}).catch(err => console.error(err))
}

// 详情页数据
const getDetail = (id, isMark = true) => {
	return instance.get('/post/getDetailData', {
		params: {
			device_id: '1551751322906',
			// uid: '59bb865a51882536d37f054c',
			// token: 'eyJhY2Nlc3NfdG9rZW4iOiJvbHFqVDlLY1BsZ0JUM3NOIiwicmVmcmVzaF90b2tlbiI6InlWM3Y5ZEZaOHB4M0szZzgiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
			// src: 'web',
			type: isMark ? 'entryView' : 'entry',
			postId: id
		}
	}).then(res => {
		if(res.data.m === 'ok') {
			return res.data.d
		}
	}).catch(err => console.error(err))
}

// 获取评论
const getComment = (objectId) => {
  console.log('object', objectId)
  return instance.get(`/comment/entry/${objectId}`, {
    params: {
      rankType: "new",
      createdAt: "",
      pageSize: 6
    }
  }).then(res => {
    if(res.data.m === 'success') {
      return res.data.d
    }
  }).catch(err => console.error(err))
}

export { getPost, getDetail, getComment }
