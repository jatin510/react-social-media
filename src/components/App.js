import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends Component {
  componentDidMount() {
    console.log('component did mount');
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS : ', this.props);
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img src="" alt="logo" />
          </div>
          <div className="search-container">
            <img className="search-icon" src="" alt="search-icon"></img>
            <input placeholder="search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img src="" alt="user-dp" />
                  <span>Jatin</span>
                </li>
                <li className="search-results-row">
                  <img src="" alt="user-dp" />
                  <span>Jatin</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img src="" alt="user-dp" id="user-dp" />
              <span>Jatin</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propsTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
