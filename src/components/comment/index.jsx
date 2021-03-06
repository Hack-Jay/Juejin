import React from 'react'
import InputComment from './inputComment'
import CommentListItem from '../common/commentListItem'

import './index.less'

const Comment = ({comment}) => {
  return (
    <div className="comment-container">
      <div className="comment-title">
        <span>评论</span>
      </div>
      <InputComment />
      {/* 评论详情 */}
      {
        comment && comment.comments && comment.comments.map((item,index) => {
          return (
            <div className="comment-list-content" key={index}>
               <CommentListItem comment={item}/>
               {
                item.topComment && item.topComment.map((topItem,Index) => (
                  <div className="comment-child-list" key={Index}>
                  <CommentListItem comment={topItem} child={true} />
                 </div>
                 ))
               }
            </div>
          )
        })
      }
    </div>
  )
}

export default Comment
