import React from 'react';
import "./index.less"

const LoginHeader = ({showModal}) => (
	<div className="login-header">
		<span onClick={showModal}>登录</span>
		<span>注册</span>
	</div>
)

export default LoginHeader
