import React from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import TimelineEntryListItem from './timelineEntryListItem';
import urlParse from '../../util'
import './index.less';

class TimelineEntryList extends React.Component {
	static propType = {
		list: PropTypes.array
	}

	toDetail = (item) => {
		const { originalUrl, title, viewsCount, createdAt, user } = item
		const objectId = urlParse(originalUrl)
		this.props.history.push({
			pathname: `/post/${objectId}`,
			query: {
				data: {
					title,
					viewsCount,
					createdAt,
					username: user.username,
					avatarLarge: user.avatarLarge
				}
			}
		})
	}
	render() {
		const { list } = this.props
		return (
			<div className="left-container">
				<div className="entry-list-container">
					<ul>
						{list && list.map((item, index) => (
							<li className="item" key={index} onClick={()=> this.toDetail(item)}>
								<TimelineEntryListItem item={item}/>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default withRouter(TimelineEntryList);
