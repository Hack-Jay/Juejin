import React from 'react';
import Nav from './nav';
import MainContainer from '../../components/mainContainer'
import getPost  from '../../api/post'
import './index.less'
class Home extends React.Component {
	componentDidMount() {
		getPost().then(res => console.log(res))
	}
	render() {
		return (
			<React.Fragment>
				<Nav />
				<MainContainer />
			</React.Fragment>
		);
	}
}

export default Home;
