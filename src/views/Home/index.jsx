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
    let d = document.getElementById("part1").offsetHeight;
    console.info(d);

    window.addEventListener("scroll", function(event) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        console.log(scrollTop);
        if(document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop ) {
            alert("到底部啦");
        }
    });
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
