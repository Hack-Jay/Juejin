import React from 'react'
import './index.less'

class Alike extends React.Component {

  handleLike = () => {

  }
  render() {
    const { count, like } = this.props
    return (
      <div onClick={this.handleLike} className="btn-like">
        <img src={like ? 'https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg' : 'https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg'} alt="" />
        {/* <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg" alt="" /> */}
        <span className={["like-text", like ? "active": null].join(' ')}>{count}</span>
      </div>
    )
  }
}

export default Alike
