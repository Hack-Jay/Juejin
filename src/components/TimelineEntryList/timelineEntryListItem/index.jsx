import React from 'react';
import { timeFormat } from '../../../util'
import './index.less';
import Alike from '../../Alike'

const TimelineEntryListItem = ({ item }) => (
	<div className="entry-link">
		<div className="entry-box">
      <div className="flex-left-box">
        <div className="meta-row">
          <ul className="meta-list">
            <li className="item-hot">热</li>
            <li className="item-post">专栏</li>
            <li className="item-username">{item.user.username}</li>
            <li className="item-time">{ timeFormat(item.createdAt) }</li>
            <li className="item-tag">{item.category.name}</li>
          </ul>
        </div>
        <a className="title-row">
          <span className="title">{item.title}</span>
        </a>
        <div className="action-row">
          <ul>
            <Alike count={item.collectionCount} like={item.isCollected} />
            {/* <li className="like-btn">
              <a>
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="" />
                <span className="like-text">{item.collectionCount}</span>
              </a>
            </li> */}
            <li className="comment-btn">
              <a>
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" alt="" />
                <span className="comment-text">{item.commentsCount}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {
        item.screenshot && <div className="flex-right">
          <img src={item.screenshot} alt="" />
        </div>
      }
		</div>
	</div>
);

export default TimelineEntryListItem;
