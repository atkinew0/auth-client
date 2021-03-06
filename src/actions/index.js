import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = ({email, password}, callback) => async dispatch => {
    try{
    const response = await axios.post('http://localhost:3090/signup', { email, password})

    dispatch({ type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token',response.data.token);
    callback();
    }
    catch(e){
        dispatch({type:AUTH_ERROR, payload: "Err Email is in use"})
    }
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type:AUTH_USER,
        payload:''
    }
}

export const signin = ({email, password}, callback) => async dispatch => {
    try{
    const response = await axios.post('http://localhost:3090/signin', { email, password})

    dispatch({ type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token',response.data.token);
    callback();
    }
    catch(e){
        dispatch({type:AUTH_ERROR, payload: "Invalid Login Credentials"})
    }
};
   
