import * as types from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

export const hasUserAuthenticated = () => dispatch => {
    let userCookie = cookie.load('userId');
    if (userCookie && typeof userCookie === 'string') {
        dispatch({
            type: types.LOGIN_SUCCESS,
            userId: userCookie
        })
    } else {
        dispatch({
            type: types.LOGIN_FAIL
        })
    }
}

export const login = (userId) => dispatch => {
    cookie.save('userId', userId, { path: '/' });
    console.log("Login");
    browserHistory.replace('/');
    dispatch({
        type: types.LOGIN_SUCCESS,
        userId: userId
    })
}


export const logout = () => dispatch => {
    cookie.remove('userId', { path: '/' });
    browserHistory.push('/login');
    dispatch({
        type: types.REQUEST_LOGOUT
    })
}
