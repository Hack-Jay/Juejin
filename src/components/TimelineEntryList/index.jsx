import React from 'react';
import * as PropTypes from 'prop-types';
import TimelineEntryListItem from './timelineEntryListItem';
import './index.less';

class TimelineEntryList extends React.Component {
	static propType = {
		list: PropTypes.array
	}

	render() {
		const { list } = this.props
		console.log('父组件list', list, this.props)
		return (
			<div className="left-container">
				<div className="entry-list-container">
					<ul>
						{/* li代表一条数据 */}
						{list && list.map((item, index) => (
							<li className="item" key={index}>
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
