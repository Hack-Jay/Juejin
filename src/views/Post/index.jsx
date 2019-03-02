import React from 'react';
import PostDetail from '../../components/postDetail';
import getPost from '../../api/post';

class Post extends React.Component {
	state = {
	};

	componentDidMount() {
		
	}
	render() {
		return (
			<React.Fragment>
				<div className="main-container">
					<div className="left-container">
						<PostDetail />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Post;
