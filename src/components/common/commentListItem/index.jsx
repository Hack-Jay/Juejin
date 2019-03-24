import React from 'react'
import { timeFormat } from '../../../util'
import "./index.less"

const CommentListItem =  ({comment, child}) => {
  const { updatedAt, userInfo, respUserInfo } = comment
  return (
    <div className="comment-list-item">
      <div className="list-avator">
        <img src={ userInfo.avatarLarge } alt=""/>
      </div>
      <div className="list-user-info">
        <div>
          <span className="user-name">{ userInfo.username }</span>
          <span className="user-job">{ userInfo.jobTitle }️</span>
        </div>
        <div>
          {
            child ? <span className="resp-text">回复 <span className="resp-span-text">{respUserInfo.username}：</span></span> : null

          }
          <span>{comment.content}</span>
        </div>
        <div className="user-comment-time">
          <span className="user-time">{ timeFormat(updatedAt) }</span>
          <div className="flex">
              <i className="iconfont left">&#xe60c;</i>
              <i className="iconfont">&#xe631;</i>
              <span class="reply">回复</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentListItem
