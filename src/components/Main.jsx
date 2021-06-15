import React, { Component } from 'react';
import DataContext from './DataContext';
import { getFeeds } from './../services/feedService';
import { getUsers } from './../services/userService';
import ShortProfile from './ShortProfile';
import CreatePost from './CreatePost';
import Pagination from './Pagination';
import _ from 'lodash';

class Main extends Component {
  state = {
    users: [],
    posts: [],
    currentUser: {},
    pageSize: 10,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    const { data: posts } = await getFeeds();
    this.setState({ posts, users });
  }

  updatePosts = (post) => {
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePrevNext = (change) => {
    const currentPage = this.state.currentPage + change;
    this.setState({ currentPage });
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const startIndex = (currentPage - 1) * pageSize;
    const posts = _(this.state.posts).slice(startIndex).take(pageSize).value();

    return (
      <DataContext.Provider
        value={{
          users: this.state.users,
          posts: posts,
          updatePosts: this.updatePosts,
        }}
      >
        <div className="row">
          <div className="col-sm-4">
            <ShortProfile />
          </div>
          <div className="col-sm-8">
            <CreatePost />
            <Pagination
              itemsCount={this.state.posts.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              onPrevNext={this.handlePrevNext}
            />
          </div>
        </div>
      </DataContext.Provider>
    );
  }
}

export default Main;
