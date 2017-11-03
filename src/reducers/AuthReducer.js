import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
}; //Initial state as an empty strubg

export default (state = INITIAL_STATE, action)  => { //if no state then it sets the initial state
    switch(action.type){    
        //state object needs to be updated carefully     
        case EMAIL_CHANGED: 
            return {...state, email: action.payload}; //create a brand new object 
            
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case LOGIN_USER:
            return {...state, loading: true, error: ''};    

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload}; //if login in successful we just want our initial state

        case LOGIN_USER_FAIL:
            return {...state, error: "Authentication Failed", password: '', loading: false};
        
        default: 
            return state;
    }
}