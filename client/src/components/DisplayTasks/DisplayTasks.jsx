import React from 'react';
import { connect } from 'react-redux';


class DisplayTasks extends React.PureComponent {
    render() {
        return <div>Tasks</div>
    }
};

const mapStateToProps = (state) => {
    const { tasks } = state;

    return {
        tasks
    };
}
const connectedDisplayTasks = connect(mapStateToProps)(DisplayTasks);
export { connectedDisplayTasks as DisplayTasks };