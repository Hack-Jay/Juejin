import React from 'react'
import "./index.less";

class InputComment extends React.Component {
  render() {
    return (
      <div className="input-comment">
        <img src="https://user-gold-cdn.xitu.io/2018/12/26/167e831654246c3a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt=""/>
        <input type="text" placeholder="输入评论..." />
      </div>
    )
  }
}

export default InputComment
