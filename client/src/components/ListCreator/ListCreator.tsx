import * as React from 'react';
import { connect } from 'react-redux';
import { listActions } from '../../actions';
import { IListModel } from '../../models';

interface ListCreatorProps {
  user: any;
  dispatch: any;
}

interface ListCreatorState {
  newList: IListModel;
  submitted: boolean;
}

class ListCreator extends React.PureComponent<ListCreatorProps, ListCreatorState> {

  state = {
    newList: {
      title: '',
      rank: 0,
      userId: this.props.user._id
    },
    submitted: false
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
      this.setState({
        newList: {
          ...newList, 
          title: ''
        }
      });
    }
  };

  render() {
    const { newList } = this.state;

    return (
      <form
        name="listCreation"
        onSubmit={this.handleSubmit}
        className="valign-wrapper mar-t-10"
      >
        <div className="input-field grow">
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
        <button className="btn mar-l-5" type="submit">
          <i className="material-icons left">add</i>
          New
          </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  };
}

const connectedListCreator = connect(mapStateToProps)(ListCreator);
export { connectedListCreator as ListCreator };
