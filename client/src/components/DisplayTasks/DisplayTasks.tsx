import * as React from 'react';
import { connect } from 'react-redux';
import { TaskCreator } from '../TaskCreator/TaskCreator';
import { taskActions } from '../../actions';

interface DisplayTasksProps {
  list: any;
  dispatch: any;
  allTasks: any[];
}

class DisplayTasks extends React.PureComponent<DisplayTasksProps, {}> {

  componentDidMount() {
    const { list, dispatch } = this.props;
    dispatch(taskActions.getByListId(list._id));
  }

  render() {
    const { allTasks } = this.props;
    const tasks = allTasks && allTasks[this.props.list._id] || [];

    return (
      <div className="collection">
        <div className="collection-item">
          <TaskCreator list={this.props.list} />
        </div>
        {tasks &&
          tasks
            .sort((a, b) => (a.rank - b.rank < 0 ? -1 : 1))
            .map((task, idx) => {
              return (
                <div className={`collection-item ${this.props.list.color} lighten-4`} key={task._id}>
                  {task.content}
                </div>
              );
            })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { tasks } = state;

  return {
    allTasks: tasks
  };
}
const connectedDisplayTasks = connect(mapStateToProps)(DisplayTasks);
export { connectedDisplayTasks as DisplayTasks };