import React from 'react'
import "./index.less"

class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list">
        <div className="list-avator">
          <img src="https://user-gold-cdn.xitu.io/2018/12/9/1679335b152eb660?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt=""/>
        </div>
        <div className="list-user-info">
          <div>
            <span className="user-name">zzzzzzzz</span>
            <span className="user-job">前端开发工程师 @ 🕸️</span>
          </div>
          <div>
            <span>学习了🙏谢谢楼主</span>
          </div>
          <div className="user-comment-time">
            <span className="user-time">1个小时前</span>
            <div className="flex">
                <i class="iconfont">&#xe60c;</i>
                <i class="iconfont">&#xe631;</i>
                <span>回复</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentList
