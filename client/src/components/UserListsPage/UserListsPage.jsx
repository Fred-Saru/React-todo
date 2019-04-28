import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, listActions } from '../../actions';
import { ColorPicker } from '../ColorPicker/ColorPicker';

class UserListsPage extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props;
    this.state = {
      newList: {
        title: '',
        rank: 0,
        userId: user._id
      }
    };
  }

  componentDidMount() {
    const { user, dispatch } = this.props;
    dispatch(listActions.getByUserId(user._id));
  }

  handleRemove = (id) => {
    const { dispatch } = this.props;
    dispatch(listActions.remove(id));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { newList } = this.state;

    this.setState({
      newList: {
        ...newList,
        [name]: value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { newList } = this.state;
    const { dispatch } = this.props;

    if (newList.title) {
      dispatch(listActions.create(newList));
    }
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.props.lists[index];
    const parent = e.target.parentNode;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', parent);
    e.dataTransfer.setDragImage(parent, 20, parent.clientHeight * 0.5);
  };

  onDragOver = (index) => {
    const { dispatch, lists } = this.props;
    const draggedOverItem = lists[index];

    if (draggedOverItem === this.draggedItem) {
      return;
    }

    let orderedLists = lists.filter((list) => list !== this.draggedItem);
    this.draggedItem.rank = index;
    orderedLists.splice(index, 0, this.draggedItem);

    dispatch(listActions.reorder(orderedLists));
  };

  onDragEnd = () => {
    const { dispatch } = this.props;
    dispatch(listActions.update(this.draggedItem));
    this.draggedItem = null;
  };

  render() {
    const { newList } = this.state;
    const { lists } = this.props;

    return (
      <div>
        <form
          name="listCreation"
          onSubmit={this.handleSubmit}
          className="row valign-wrapper"
          style={{ marginTop: '10px' }}
        >
          <div className="input-field col s11">
            <input
              className="validate"
              type="text"
              name="title"
              id="title"
              value={newList.title}
              onChange={this.handleChange}
            />
            <label htmlFor="title">New list title</label>
          </div>
          <button className="btn col s1" type="submit">
            <i className="material-icons left">add</i>
            New
          </button>
        </form>
        <h3>My lists</h3>
        <ul className="collection">
          {lists &&
            lists
              .sort((a, b) => (a.rank - b.rank < 0 ? -1 : 1))
              .map((list, idx) => {
                return (
                  <li
                    className="valign-wrapper collection-item mar-5"
                    key={list._id}
                    onDragOver={() => this.onDragOver(idx)}
                  >
                    <span
                      className="grab round"
                      draggable
                      onDragStart={(e) => this.onDragStart(e, idx)}
                      onDragEnd={this.onDragEnd}
                    >
                      <i className="material-icons grey-text lighten-1 mar-10">
                        drag_handle
                      </i>
                    </span>
                    <h4 className="mar-0 grow">{list.title}</h4>
                    <ColorPicker />
                    <div className="btn-list">
                      <Link className="btn" to={`/lists/${list._id}`}>
                        <i className="material-icons left">edit</i>
                        edit
                      </Link>
                      <a
                        className="btn"
                        onClick={() => this.handleRemove(list._id)}
                      >
                        <i className="material-icons left">remove</i>
                        remove
                      </a>
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    );
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
