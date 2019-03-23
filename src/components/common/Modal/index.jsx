import React, { Component } from 'react';
import Portal from './Portal';
import './index.less';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.confirm = this.confirm.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.setState({ visible: this.props.visible })
  }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible })
  }

  closeModal() {
    const { onClose } = this.props
    onClose && onClose()
    this.setState({ visible: false })
  }

  confirm() {
    const { confirm } = this.props
    confirm && confirm()
    this.setState({ visible: false })
  }

  maskClick() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state;
    const { title, children, footer } = this.props;
    return <Portal visible={visible}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title"><h3>{title}</h3></div>
          <div className="modal-content">{children}</div>
          {
            footer && <div className="modal-operator">
              <button
                onClick={this.closeModal}
                className="modal-operator-close"
              >取消</button>
              <button
                onClick={this.confirm}
                className="modal-operator-confirm"
              >确认</button>
            </div>
          }

        </div>
        <div
          className="mask"
          onClick={this.closeModal}
        ></div>
      </div>
    </Portal>
  }
}

export default Modal;
