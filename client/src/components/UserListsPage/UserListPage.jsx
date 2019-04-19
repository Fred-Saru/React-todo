import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions } from '../../actions';

class UserListsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(listActions.getByUserId(this.state.user.id));
  }

  handleRemoveList = (id) => {
    this.props.dispatch(listActions.remove(id));
  }

  render() {
    return (
      <div>
        {this.state.lists.map((list) => {
          return (
            <div>
              <h2>{list.name}</h2>
              <Link to="">view</Link>
              <button type="button" onClick={() => this.handleRemoveList(list.id)}>del</button>
            </div>
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { authentication, lists } = state;
  const { user } = authentication;

  return {
    user, 
    lists
  };
};

const connectedListsPage = connect(mapStateToProps)(UserListsPage);
export { connectedListsPage as UserListsPage };