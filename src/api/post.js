import axios from 'axios';

const getPost = () => {
	return axios.get('https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank', {
		params: {
			src: 'web',
			uid: '5c22dcf1f265da613d7c1a9f',
			device_id: '1550632931671',
			token: 'eyJhY2Nlc3NfdG9rZW4iOiJ2QlRmTFA3MEVNT3NSOEE2IiwicmVmcmVzaF90b2tlbiI6IjBWWGpHeTVhOTVsYzdaTDIiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
			limit: 20,
			category: 'all',
			recomment: 1
		}
	}).then(res => {
		console.log('post success...')
	}).catch(err => console.error(err))
}
export default getPost
