import React, { Component } from 'react';
import { PostsList } from './';

export default class Home extends Component {
  render() {
    const { posts } = this.props;
    console.log(this.props);
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}
