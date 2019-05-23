import { ITaskModel } from "../../models";
import { TaskActions, alertActions } from "../../actions";

export interface ITasksMap {
    [Key: string]: ITaskModel
};

export interface ITasksMapState {
    byId: ITasksMap,
    allIds: string[]
};

export function defaultTasksMapState(): ITasksMapState {
    return {
        byId: {},
        allIds: []
    };
};

export function tasksMapReducer(state: ITasksMapState, action: TaskActions): ITasksMapState {
    switch(action.type) {
        case 'TASK_GETBYLIST_SUCCESS':
            return {
                byId: action.tasks.reduce((acc, t) => ({ ...acc, [t._id]: t }), state.byId),
                allIds: action.tasks.map((t) => t._id)
            }
        default: 
            return state;
    }
}