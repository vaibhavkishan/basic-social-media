import React, { Component, Fragment } from 'react';
import { userName } from '../services/profile';
import { postFeeds } from '../services/postService';
import DataContext from './DataContext';

class CreatePost extends Component {
  state = { title: '', body: '' };

  handleChangeTitle = (e) => {
    const title = e.currentTarget.value;
    localStorage.setItem('title', title);
    this.setState({ title });
  };

  handleChangeBody = (e) => {
    const body = e.currentTarget.value;
    localStorage.setItem('body', body);
    this.setState({ body });
  };

  handleCancel = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    Array.from(document.querySelectorAll('textarea')).forEach(
      (input) => (input.value = '')
    );
    const title = '';
    const body = '';
    localStorage.removeItem('title');
    localStorage.removeItem('body');
    this.setState({ title, body });
  };

  render() {
    return (
      <DataContext.Consumer>
        {(data) => (
          <div>
            {/* Creating New Post */}
            <Fragment>
              <input
                type="text"
                placeholder="Title..."
                className="card divBorder col-8 feeds"
                onChange={(e) => this.handleChangeTitle(e)}
              />
              <br />
              <textarea
                type="text"
                placeholder="Body..."
                className="card divBorder col-8 feeds"
                onChange={(e) => this.handleChangeBody(e)}
              />
              <div className="buttonPosition">
                <button
                  className="btn btn-primary btn-sm m-3 divButtonBorder"
                  disabled={
                    localStorage.getItem('currentUser') && this.state.title
                      ? false
                      : true
                  }
                  onClick={() => {
                    Array.from(document.querySelectorAll('input')).forEach(
                      (input) => (input.value = '')
                    );
                    Array.from(document.querySelectorAll('textarea')).forEach(
                      (input) => (input.value = '')
                    );
                    const post = {
                      userId: localStorage.getItem('userId'),
                      title: localStorage.getItem('title'),
                      body: localStorage.getItem('body'),
                    };
                    data.updatePosts(post);
                    postFeeds(post);
                    localStorage.removeItem('title');
                    localStorage.removeItem('body');
                  }}
                >
                  Post
                </button>
                <button
                  className="btn btn-primary btn-sm divButtonBorder"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              </div>
              <br />
              <br />
            </Fragment>

            {/* Existing Posts */}
            <Fragment>
              {data.posts.map((u) => (
                <Fragment key={u.id}>
                  <div className="card divBorder col-8 feeds">
                    {/* <p className="spanHeading paragraph">
                      {userName(data, u.userId)}
                    </p> */}
                    <p className="feedsTitle paragraph">{u.title}</p>
                    <p className="paragraph">{u.body}</p>
                  </div>
                  <br />
                  <br />
                </Fragment>
              ))}
            </Fragment>
          </div>
        )}
      </DataContext.Consumer>
    );
  }
}

export default CreatePost;
