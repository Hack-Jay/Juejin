import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './index.less';

class Header extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					title: '首页',
					url: '/'
				},
				{
					title: '动态',
					url: '/1'
				},
				{
					title: '话题',
					url: '/2'
				},
				{
					title: '小册',
					url: '/3'
				},
				{
					title: '活动',
					url: '/4'
				}
			]
		};
	}
	render() {
		return (
			<React.Fragment>
				<div className="main-header">
					<div className="container">
						<Link className="logo" to="/">
							<img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo" />
						</Link>
						<ul className="nav-list">
							{this.state.list.map((item, index) => (
								<li key={index}>
									<NavLink to={item.url ? item.url : '/'} activeClassName="selected">{item.title}</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default Header;
