import React, { Component } from 'react';
import { getUserById } from '../services/userService';
import DataContext from './DataContext';

class ShortProfile extends Component {
  state = { currentUser: '' };

  async componentDidMount() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const { data } = await getUserById(userId);
      this.setState({ currentUser: data });
    }
  }

  render() {
    return (
      <DataContext.Consumer>
        {(data) => (
          // <div></div>
          <div className="Container">
            <div className="card divBorder col-8 feeds">
              <p className="spanHeading feeds">
                {this.state.currentUser
                  ? this.state.currentUser.name
                  : 'User not logged in'}
              </p>
              {this.state.currentUser && (
                <p className="feeds">{this.state.currentUser.email}</p>
              )}
            </div>
          </div>
        )}
      </DataContext.Consumer>
    );
  }
}

export default ShortProfile;
