import React from 'react';
import VirtualList from 'react-virtual-list';
import TimelineEntryListItem from '../TimelineEntryList/timelineEntryListItem';

const MyList = ({ virtual, itemHeight }) => (
	<ul style={virtual.style}>
		{
      virtual.item && virtual.item.map((item, index) => (
				<li className="item" key={index} onClick={() => this.toDetail(item)} style={{height: itemHeight}}>
					<TimelineEntryListItem item={item} />
				</li>
      ))
    }
	</ul>
);

const MyVirtualList = VirtualList({
  overflow: scroll,
	initialState: {
		firstItemIndex: 0, // show first ten items
		lastItemIndex: 20 // during initial render
	}
})(MyList);

export default MyVirtualList;
