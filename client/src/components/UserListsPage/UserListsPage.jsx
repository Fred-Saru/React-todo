import React from 'react';
import { connect } from 'react-redux';
import { listActions } from '../../actions';
import { ListCreator } from '../ListCreator/ListCreator';
import { DisplayLists } from '../DisplayLists/DisplayLists';

class UserListsPage extends React.Component {
  componentDidMount() {
    const { user, dispatch } = this.props;
    dispatch(listActions.getByUserId(user._id));
  }

  render() {
    return (
      <div>
        <h3>My lists</h3>
        <ListCreator />
        <DisplayLists />
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

const connectedListsPage = connect(mapStateToProps)(UserListsPage);
export { connectedListsPage as UserListsPage };
