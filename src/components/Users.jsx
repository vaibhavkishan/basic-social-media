import React, { Component, Fragment } from 'react';
import { getUsers } from './../services/userService';
import CompleteProfile from './CompleteProfile';

class Users extends Component {
  state = {
    users: [],
    modalShow: false,
    currentUser: {},
    currentAddress: {},
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  toggleModal = () => {
    const modalShow = !this.state.modalShow;
    this.setState({ modalShow });
  };

  render() {
    const { users } = this.state;
    return (
      <Fragment>
        {users.map((u) => (
          <Fragment key={u.id}>
            <div
              className="card divBorder col-2 clickable"
              onClick={() => {
                const modalShow = !this.state.modalShow;
                this.setState({
                  modalShow,
                  currentUser: u,
                  currentAddress:
                    u.address.street +
                    ', ' +
                    u.address.suite +
                    ', ' +
                    u.address.city +
                    ', ' +
                    u.address.zipcode,
                });
              }}
            >
              {u.name}
            </div>
            <br />
          </Fragment>
        ))}

        <div>
          <CompleteProfile
            user={this.state.currentUser}
            address={this.state.currentAddress}
            show={this.state.modalShow}
            onHide={() => {
              this.setState({ modalShow: false });
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default Users;
