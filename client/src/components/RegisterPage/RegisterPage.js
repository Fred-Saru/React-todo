import React from 'react';
import { Link } from 'react-route-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      },
      submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;

    if (user.firstname && user.lastname && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  };

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="registerForm" onSubmit={this.handleSubmit}>
          <div
            className={`form-group ${
              submitted && !user.firstname ? 'has-error' : ''
            }`}
          >
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={user.firstname}
              onChange={this.handleChange}
            />
            {submitted && !user.firstname && (
              <div className="help-block">Firstname is required</div>
            )}
          </div>
          <div
            className={`form-group ${
              submitted && !user.lastname ? 'has-error' : ''
            }`}
          >
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={user.lastname}
              onChange={this.handleChange}
            />
            {submitted && !user.lastname && (
              <div className="help-block">Lastname is required</div>
            )}
          </div>
          <div
            className={`form-group ${
              submitted && !user.username ? 'has-error' : ''
            }`}
          >
            <label htmlFor="username">username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={this.handleChange}
            />
            {submitted && !user.username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={`form-group ${
              submitted && !user.password ? 'has-error' : ''
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {registering && (
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { registering } = state.registration;
  return {
    registering
  };
};

const connectRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectRegisterPage as RegisterPage };
