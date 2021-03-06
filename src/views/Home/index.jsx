import React from 'react';
import { connect } from 'react-redux'
import { getTimeLineList } from '../../redux/Home'
import Nav from './nav';
import TimelineEntryList from '../../components/TimelineEntryList';
import ScrollToBottom from '../../components/common/scrollToBottom';
import './index.less';
@connect(
	state => state,
  { getTimeLineList }
)
class Home extends React.Component {
	componentDidMount() {
    this.props.getTimeLineList()
	}
	render() {
		const { timeLine } = this.props;

		return (
			<React.Fragment>
				<Nav />
				<div className="main-container">
					<TimelineEntryList list={timeLine} />
          <ScrollToBottom isLoadMore={true} />
				</div>
			</React.Fragment>
		);
	}
}

export default Home
