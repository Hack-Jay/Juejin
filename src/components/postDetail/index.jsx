import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
// import htmlParser from 'react-markdown/plugins/html-parser'

import './index.less';

// const parseHtml = htmlParser({
//   isValidNode: node => node.type !== 'script',
//   processingInstructions: [/* ... */]
// })

const PostDetail = ({ data, userInfo }) => (
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
			{/* <ReactMarkdown source={data.transcodeContent} escapeHtml={false} /> */}
			{/* <ReactMarkdown source={data.transcodeContent} escapeHtml={false} /> */}
			<div dangerouslySetInnerHTML={{ __html: data.transcodeContent }} />
		</div>
	</div>
);

export default PostDetail;
