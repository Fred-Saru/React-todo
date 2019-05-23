import { IListModel } from "../../models";
import { ListActions } from "../../actions";

export interface IListsMap {
    [Key: string]: IListModel
};

export interface IListsMapState {
    byId: IListsMap,
    allIds: string[]
};

export function defaultListsMapState(): IListsMapState {
    return {
        byId: {},
        allIds: []
    };
};

export function listsMapReducer(state: IListsMapState, action: ListActions) {
    switch(action.type) {
        case 'LIST_GETBYUSER_SUCCESS':
            return {
                byId: action.lists.reduce((acc, l) => ({ ...acc, [l._id]: l }), state.byId),
                allIds: action.lists.map((l) => l._id)
            };
        default:
            return state;
    }
}