import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class HomePage extends React.Component {
  componentDidMount() {
  }

  handleRemoveUser(id) {
    this.props.dispatch(userActions.remove(id));
  }

  render() {
    const { user } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hello {user.username}</h1>
        <p>You are logged in with React!</p>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user  
  };
};

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
