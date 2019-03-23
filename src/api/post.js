// import axios from 'axios';
import instance from '../../config'

const getPost = (data) => {
	return instance.get('/timeline/get_entry_by_rank', {
		params: {
      ...data,
			src: 'web',
			uid: '59bb865a51882536d37f054c',
			device_id: '1553261281547',
			token: 'eyJhY2Nlc3NfdG9rZW4iOiJEcTdIZ1dXYVBrZzJyd2syIiwicmVmcmVzaF90b2tlbiI6InlVS2RtakZBWVZTSzBVM04iLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
			limit: 20,
			category: 'all',
      recomment: 1,
		}
	}).then(res => {
		if(res.data.m === 'ok') {
			return res.data.d.entrylist
		}
	}).catch(err => console.error(err))
}

// 详情页数据
const getDetail = (id, isMark = true) => {
	return instance.get('/post/getDetailData', {
		params: {
			uid: '5c22dcf1f265da613d7c1a9f',
			device_id: '1551511796562',
			token: 'eyJhY2Nlc3NfdG9rZW4iOiJiT1ZaNXJPSGN2bWFFOGJJIiwicmVmcmVzaF90b2tlbiI6InlOZjZPYWtaMnNiZm1nMWEiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
			src: 'web',
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
