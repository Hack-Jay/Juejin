import React from 'react';
import { connect } from 'react-redux'
import { getTimeLineList, getMoreList} from '../../redux/Home'
import Nav from './nav';
import TimelineEntryList from '../../components/TimelineEntryList';
import './index.less';
@connect(
	state => state,
  { getTimeLineList, getMoreList }
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
        <button onClick={this.props.getMoreList}>加载更多...</button>
				<div className="main-container">
					<TimelineEntryList list={timeLine} />
				</div>
			</React.Fragment>
		);
	}
}

export default Home
