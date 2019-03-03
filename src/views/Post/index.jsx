import React from 'react';
import PostDetail from '../../components/postDetail';
import { getDetail } from '../../api/post';

class Post extends React.Component {
	state = {
		data: {},
		userInfo: {}
	};

	componentDidMount() {
		console.log('post this:', this)
		const id = this.props.match.params.id
		this.setState({
			userInfo: this.props.location.query.data
		})
		getDetail(id).then(res => this.setState({data: res}))
	}
	render() {
		const { data, userInfo } = this.state
		return (
			<React.Fragment>
				<div className="main-container">
					<div className="left-container">
						<PostDetail data={data} userInfo={userInfo} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Post;
