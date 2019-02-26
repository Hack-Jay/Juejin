import React from 'react';
import './index.less';

class Header extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					title: '首页'
				},
				{
					title: '动态'
				},
				{
					title: '话题'
				},
				{
					title: '小册'
				},
				{
					title: '活动'
				}
			]
		};
	}
	render() {
		return (
			<div className="main-header">
				<div className="container">
					<a className="logo">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo" />
          </a>
					<ul className="nav-list">
						{this.state.list.map((item, index) => (
							<li key={index}>
								<a>{item.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;
