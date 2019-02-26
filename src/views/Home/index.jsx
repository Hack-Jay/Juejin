import React from 'react';
import Header from '../../components/Header';
import Nav from './nav';
import getPost  from '../../api/post'
import './index.less'
class Home extends React.Component {
	componentDidMount() {
		getPost().then(res => console.log(res.data))
	}
	render() {
		return (
			<div>
				<Header />
				<Nav />
				{/* <div class="main-container">2131</div> */}
			</div>
		);
	}
}

export default Home;
