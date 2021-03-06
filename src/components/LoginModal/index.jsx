import React from 'react';
import Modal from '../common/Modal';

class LoginModal extends React.Component {
  state = {
    phoneNumber: '13267147433',
    password: '2986571230'
  }

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
        [name]: e.target.value
    })
    console.log(this.phoneNumber, this.password)
  }

  handleLogin = () => {
    const { phoneNumber, password } = this.state
    const { login, confirm, token } = this.props
    const params = {
      phoneNumber,
      password
    }
    login(params)
    confirm()

  }

  render() {
    const { phoneNumber, password } = this.state
    const { visible, confirm, onClose } = this.props
    return (
      <Modal visible={visible} title="登录" confirm={confirm} onClose={onClose} footer={false}>
        <input type="text" className="input" placeholder="请输入手机号或邮箱" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
        <input type="password" className="input" placeholder="请输入密码" name="password" value={password} onChange={this.handleChange}/>
        <button className="btn" onClick={this.handleLogin}>登录</button>
      </Modal>
    )
  }
}

export default LoginModal
