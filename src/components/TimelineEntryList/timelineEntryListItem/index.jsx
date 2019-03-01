import React from 'react';
import './index.less'

const TimelineEntryListItem = () => (
	<a className="entry-link">
		<div className="entry-box">
			<div className="meta-row">
				<ul className="meta-list">
					<li className="item-hot">热</li>
					<li className="item-post">专栏</li>
					<li className="item-username">zzzzzzz</li>
					<li className="item-time">2个小时前</li>
					<li className="item-tag">JavaScript</li>
				</ul>
			</div>
			<div className="title-row">
				<a class="title">如何编写高质量的函数 -- 命名/注释</a>
			</div>
			<div className="action-row">
				<ul>
					<li className="like-btn">
						<a>
							<img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="" />
							<span className="like-text">136</span>
						</a>
					</li>
					<li className="comment-btn">
						<a>
							<img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" alt="" />
							<span className="comment-text">10</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</a>
);

export default TimelineEntryListItem;
