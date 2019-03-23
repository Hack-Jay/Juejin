import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  render() {
    const { visible, children } = this.props;
    return visible && ReactDOM.createPortal(
      children,
      this.node,
    );
  }
}
export default Portal
