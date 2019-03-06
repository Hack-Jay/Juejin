import React from 'react';
import './index.less';

// question：数据嵌套多层拿不到， 如a.b.c.e
const PostDetail = ({ data, userInfo }) => (
	<div className="article-detail">
		<div className="author-info-block">
			<img className="avator-img" src={userInfo.avatarLarge} />
			<div className="user-info">
				<span className="user-name-text ellipsis">{userInfo.username}</span>
				<div className="user-info-time">
					<span className="user-info-createtime">{data.info.createdAt}</span>
					<span className="user-info-read">阅读 {data.info.viewsCount}</span>
				</div>
			</div>
		</div>
		<h1 className="article-title">{data.info.title}</h1>
		<div className="article-content">
			<div dangerouslySetInnerHTML={{ __html: data.content }} />
		</div>
	</div>
);

export default PostDetail;
