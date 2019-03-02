import React from 'react';
import * as PropTypes from 'prop-types';
import TimelineEntryListItem from './timelineEntryListItem';
import './index.less';

class TimelineEntryList extends React.Component {
	static propType = {
		list: PropTypes.array
	}
	state = {
		item: [ 1, 2, 3 ]
	};
	render() {
		const { list } = this.props
		console.log('list', list, this.props)
		return (
			<div className="timeline-entry-list">
				<div className="entry-list-container">
					<ul>
						{/* li代表一条数据 */}
						{list.map((item, index) => (
							<li class="item" key={index}>
								<TimelineEntryListItem item={item}/>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TimelineEntryList;
