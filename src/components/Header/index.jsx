import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginHeader from '../loginHeader';
import LoginModal from '../LoginModal';
import { login } from '../../redux/User';

import './index.less';

@connect(
  state => state.user,
  {login}
)
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
			],
			visible: false
		};
	}

  closeModal = () => {
    this.setState({ visible: false });
    console.log('close', this.state.visible);
  }

  confirm = () =>  {
		this.setState({ visible: false });
  }

	showModal = () => {
    this.setState({ visible: true });
  };

  handleLogin(params) {
    this.props.login(params)
  }

  renderUser = () => {
    if(this.props.token) {
      return <img className="user-avatar" src={this.props.user.avatarLarge} />
    } else {
      return <LoginHeader showModal={this.showModal}  />
    }
  }

	render() {
    const { login, token } = this.props
    const { visible } = this.state;
    console.log(this.props)
		return (
			<React.Fragment>
				<div className="main-header">
					<div className="container">
						<div className="flex">
							<Link className="logo" to="/">
								<img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo" />
							</Link>
							<ul className="nav-list">
								{this.state.list.map((item, index) => (
									<li key={index}>
										<NavLink to={item.url ? item.url : '/'} activeClassName="selected">
											{item.title}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
            {
              this.renderUser()
            }
					</div>
				</div>
        <LoginModal visible={visible} confirm={this.confirm} onClose={this.closeModal} login={login} token={token}/>
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default Header;
