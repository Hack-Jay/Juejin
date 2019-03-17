import React from 'react'
import InputComment from './inputComment'
import CommentList from './commentList'

import './index.less'

class  Comment extends React.Component {
  render() {
    return (
      <div className="comment-container">
       <div className="comment-title">
          <span>评论</span>
       </div>
        <InputComment />
        <CommentList />
      </div>
    )
  }
}

export default Comment
