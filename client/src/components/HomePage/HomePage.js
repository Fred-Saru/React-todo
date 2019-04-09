import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleRemoveUser(id) {
    this.props.dispatch(userActions.remove(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hello {user.username}</h1>
        <p>You are logged in with React!</p>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.items && (
          <ul>
            {users.items.map((user, index) => {
              return (
                <li key={user.id}>
                  {`${user.firstname} ${user.lastname}`}
                  {user.deleting ? (
                    <em> - Deleting...</em>
                  ) : user.deleteError ? (
                    <span className="error"> - ERROR: {user.deleteError}</span>
                  ) : (
                    <a href="#" onClick={this.handleRemoveUser(user.id)}>
                      Delete
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users, authentication } = state;
  const { user } = authentication;

  return {
    user,
    users
  };
};

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
