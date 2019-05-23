import * as React from 'react';
import { connect } from 'react-redux';
import { taskActions } from '../../actions';
import { ITaskModel } from '../../models';

interface ITaskCreatorProps {
  list: any;
  dispatch: any;
}

interface ITaskCreatorState {
  newTask: ITaskModel;
}

class TaskCreator extends React.Component<ITaskCreatorProps, ITaskCreatorState> {
  state = {
    newTask: {
      content: '',
      rank: 0,
      listId: this.props.list._id,
      isDone: false
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { newTask } = this.state;
    const { dispatch } = this.props;

    if (newTask.content) {
      dispatch(taskActions.create(newTask));
      this.setState({
        newTask: {
          ...newTask, 
          content: ''
        }
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { newTask } = this.state;

    this.setState({
      newTask: {
        ...newTask,
        [name]: value
      }
    });
  };

  render() {
    const { newTask } = this.state;
    return (
      <form name="taskCreation" onSubmit={this.handleSubmit}>
        <div className="input-field grow">
          <input
            className="validate"
            type="text"
            name="content"
            id="content"
            value={newTask.content}
            onChange={this.handleChange}
          />
          <label htmlFor="content">New task content</label>
        </div>
      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  };
}

const connectedTaskCreator = connect(mapStateToProps)(TaskCreator);
export { connectedTaskCreator as TaskCreator };

