import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img src="" alt="user-pic" />
                <div>
                  <span className="post-author"> {post.user.name}</span>
                  <span className="post-time"> a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                {/* post like */}
                <div className="post-like">
                  <img src="" alt="like" />
                  <span>{post.likes.length}</span>
                </div>

                {/* post comment */}
                <div className="post-comments-icon">
                  <img src="" alt="post comments" />
                  <span>{post.comments.length}</span>
                </div>
              </div>

              <div className="post-comment-box">
                <input placeholder="start typing a comment"></input>
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Jatin</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">23</span>
                  </div>

                  {/* content */}
                  <div className="post-comment-content"> random content</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
