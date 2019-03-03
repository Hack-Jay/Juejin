// url parse : https://juejin.im/post/5c75d34851882564965edb23
const urlParse = (url) => {
	let urlP = url.startsWith("https://") ? url.replace('https://', '') : url
	urlP = urlP.split('/')
	return urlP[urlP.length - 1]	
}

export default urlParse