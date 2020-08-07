import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';

class App extends Component {
  componentDidMount() {
    console.log('component did mount');
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS : ', this.props);
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/login" component={Login} />
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts}></Home>;
              }}
            />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
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
