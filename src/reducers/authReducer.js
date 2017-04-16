import * as types from '../actions/actionTypes';

const initialState = {
    userId: "",
    authenticated: true
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                userId: action.userId,
                authenticated: true
            })
        case types.LOGIN_FAIL:
        case types.REQUEST_LOGOUT:
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                userId: "",
                authenticated: false
            })
        case types.REQUEST_LOGIN:
            return;
        default:
            return state;
    }

} 