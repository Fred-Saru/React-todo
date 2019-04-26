import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, listActions } from '../../actions';

class UserListsPage extends React.Component {
  componentDidMount() {
    const { user, dispatch } = this.props;
    dispatch(listActions.getByUserId(user._id));
  }
  
  handleRemoveList = (id) => {
    const { user, dispatch } = this.props;

    dispatch(listActions.remove(id));
    dispatch(listActions.getByUserId(user._id));
  }

  render() {
    const { lists } = this.props;
    return (
      <div>
        <div>
          <h3>Create new list</h3>
          <Link to="lists/create">+</Link>
        </div>
        <h3>My lists</h3>
        <ul>
          {lists && lists.map((list) => {
            return (
              <li key={list._id}>
                <h3>{list.title}</h3>
                <Link className="btn-flat" to={`/lists/${list._id}`}>view</Link>
                <button className="btn-flat" type="button" onClick={() => this.handleRemoveList(list._id)}>del</button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user, lists } = state;

  return {
    user, 
    lists
  };
};

const connectedListsPage = connect(mapStateToProps)(UserListsPage);
export { connectedListsPage as UserListsPage };