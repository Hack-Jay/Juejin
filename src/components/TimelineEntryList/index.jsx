import React from 'react';
import TimelineEntryListItem from './timelineEntryListItem';
import './index.less';

class TimelineEntryList extends React.Component {
	state = {
		item: [ 1, 2, 3 ]
	};
	render() {
		return (
			<div className="timeline-entry-list">
				<div className="entry-list-container">
					<ul>
						{/* li代表一条数据 */}
						{this.state.item.map((item) => (
							<li class="item">
								<TimelineEntryListItem />
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TimelineEntryList;
