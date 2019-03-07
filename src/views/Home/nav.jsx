import React from 'react'

import './nav.less'
class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tabs: [
				'推荐', '关注', 'Android', '前端', 'iOS', '后端', '设计', '工具资源', '阅读', '人工智能'
			]
		}
	}
	render() {
		return (
			<nav className="view-nav">
				<ul>
					{
						this.state.tabs.map((item, index) => <li key={index}>{item}</li>)
					}

				</ul>
			</nav>
		)
	}
}

export default Nav
