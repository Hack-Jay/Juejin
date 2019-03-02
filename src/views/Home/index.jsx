import React from 'react';
import Nav from './nav';
import TimelineEntryList from '../../components/TimelineEntryList'
import getPost from '../../api/post';
import './index.less';
class Home extends React.Component {
	state = {
		timelineEntryList: []
	};

	componentDidMount() {
		getPost().then((res) => {
			this.state.timelineEntryList = res
			console.log('this.state:', this.state.timelineEntryList)
		});
	}
	render() {
		const { timelineEntryList } = this.state
		console.log('this.state111:', this.state.timelineEntryList)

		return (
			<React.Fragment>
				<Nav />
				<div className="main-container">
					<TimelineEntryList list={timelineEntryList} />
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
