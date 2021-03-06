import React from 'react';
import { connect } from 'react-redux';
import { getPostDetail, getUserInfo } from '../../redux/Post';
import PostDetail from '../../components/postDetail';
import Comment from '../../components/comment';
import ScrollToBottom from '../../components/common/scrollToBottom';

@connect((state) => state, { getPostDetail, getUserInfo })
class Post extends React.Component {
	state = {
		data: {},
		userInfo: {}
	};

	componentDidMount() {
    this.getDetail();
	}

	getDetail = () => {
    const id = this.props.match.params.id;
		this.props.getUserInfo(id);
    this.props.getPostDetail(id);
  };

	render() {
    const { post } = this.props;
    const { comment } = post
    const userInfo = { ...post.info.user };
		return (
			<React.Fragment>
				<div className="main-container">
					<div className="left-container">
            { post && <PostDetail data={post} userInfo={userInfo} /> }
            { comment && <Comment comment={comment} /> }
					</div>
				</div>
        <ScrollToBottom />
			</React.Fragment>
		);
	}
}

export default Post;
