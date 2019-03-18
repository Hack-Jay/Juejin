import React from 'react';
import { connect } from 'react-redux';
import { getMoreList } from '../../../redux/Home';

import './index.less';

@connect(null, { getMoreList })
class ScrollToBottom extends React.Component {
	state = {
		show: false
	};

	getScrollTop = () => {
		let scrollTop = 0,
			bodyScrollTop = 0,
			documentScrollTop = 0;
		if (document.body) {
			bodyScrollTop = document.body.scrollTop;
		}
		if (document.documentElement) {
			documentScrollTop = document.documentElement.scrollTop;
		}
		scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
		return scrollTop;
	};

	getScrollHeight = () => {
		let bSH, dSH;
		let scrollHeight = 0,
			bodyScrollHeight = 0,
			documentScrollHeight = 0;
		if (document.body) {
			bSH = document.body.scrollHeight;
		}
		if (document.documentElement) {
			dSH = document.documentElement.scrollHeight;
		}
		scrollHeight = bSH - dSH > 0 ? bSH : dSH;
		return scrollHeight;
	};

	getWindowHeight = () => {
		let windowHeight = 0;
		if (document.compatMode == 'CSS1Compat') {
			windowHeight = document.documentElement.clientHeight;
		} else {
			windowHeight = document.body.clientHeight;
		}
		return windowHeight;
	};

	componentDidMount() {
		let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		window.onscroll = () => {
			// 页面滚动时增加判断，超出页面可视化高度时显示回到顶部的按钮
			let osTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (osTop > clientHeight + 300) {
				this.setState({
					show: true
				});
			} else {
				this.setState({
					show: false
				});
			}
			// 滑至底部加载更多
			if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {
				this.props.getMoreList();
			}
		};
	}

	render() {
		const { show } = this.state;
		return (
			<React.Fragment>
				{show && (
					<div className="suspension-panel">
						<img src={require('../../../images/to-top.png')} onClick={()=> window.scroll(0, 0)} />
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default ScrollToBottom;
