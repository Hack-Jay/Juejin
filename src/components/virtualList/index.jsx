import VirtualList from 'react-virtual-list';

const MyList = ({
  virtual,
  itemHeight,
}) => (
  <ul style={virtual.style}>
    {virtual.items.map(item => (
      <li key={`item_${item.id}`} style={{height: itemHeight}}>
        Lorem ipsum dolor sit amet
      </li>
    ))}
  </ul>
);

const MyVirtualList = VirtualList()(MyList);
export default MyVirtualList
