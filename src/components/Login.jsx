import React, { Component } from 'react';
import { getUsers } from './../services/userService';
import { login } from '../services/logging';

class Login extends Component {
  state = { email: '', usersData: [], loginError: '' };

  async componentDidMount() {
    const { data } = await getUsers();
    this.setState({ usersData: data });
  }

  handleChange = (e) => {
    const email = e.currentTarget.value;
    this.setState({ email });
  };

  onSubmit = () => {
    const { email, usersData } = this.state;
    if (usersData.map((e) => e.email).includes(email)) {
      const user = usersData.filter((e) => e.email === email);
      login(email); //saving in localstorage for login
      localStorage.setItem('userId', user[0].id);
    } else this.setState({ loginError: 'User not found' });
  };

  render() {
    return (
      <div className="container feeds">
        <div>
          <span className="spanHeading">Email</span>
          <br />
          <input className="input" onChange={(e) => this.handleChange(e)} />
          <br />
          <p>{this.state.loginError}</p>
          <button className="btn btn-primary btn-sm" onClick={this.onSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
