import React from 'react'
import ReactMarkdown  from 'react-markdown/with-html'
import "./index.less"

const PostDetail = ({data, userInfo}) => (
	<div className="article-detail">
		<div className="author-info-block">
			<img className="avator-img" src={userInfo.avatarLarge} />
			<div className="user-info">
				<span className="user-name-text ellipsis">{userInfo.username}</span>
				<div className="user-info-time">
					<span className="user-info-createtime">{userInfo.createdAt}</span>
					<span className="user-info-read">阅读 {userInfo.viewsCount}</span>
					</div>
			</div>
		</div>
		<h1 className="article-title">{userInfo.title}</h1>
		<div className="article-content">
			<ReactMarkdown source={data.transcodeContent} escapeHtml={false}/>
		</div>
	</div>
)

export default PostDetail