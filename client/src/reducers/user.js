import { userActionType } from '../constants';

let storedUser = JSON.parse(localStorage.getItem('user'));
const initialState = storedUser ? storedUser : {};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case userActionType.LOGIN_SUCCESS:
        case userActionType.UPDATE_SUCCESS:
            return action.user;
        case userActionType.LOGIN_FAILURE:
        case userActionType.LOGOUT:
            return null;
        default:
            return state;
    }
};