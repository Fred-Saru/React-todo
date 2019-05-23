import { UserActions } from '../actions';
import { IUserModel } from '../models';

let storedUser = JSON.parse(localStorage.getItem('user'));
const initialState = storedUser ? storedUser : {};

export interface IUserState {
    state: string, // 'INIT', 'LOADING', 'LOADED', 'ERROR'
    user: IUserModel,
    err?: string
}

export function defaultUserState(): IUserState {
    return {
        state: 'INIT',
        user: storedUser ? storedUser : null
    }
}

export function userReducer(state: IUserState, actions: UserActions): IUserState {
    switch(actions.type) {
        case 'USER_LOGIN_REQUEST':
        case 'USER_UPDATE_REQUEST':
        return {
            ...state,
            state: 'LOADING',
            user: null
        };
        case 'USER_LOGIN_SUCCESS':
        case 'USER_UPDATE_SUCCESS':
            return {
                ...state,
                state: 'LOADED',
                user: actions.user
            };
        case 'USER_LOGIN_FAILURE':
        case 'USER_LOGOUT':
            return {
                ...state,
                state: 'INIT',
                user: null
            };
        default: 
            return state;
    }
}