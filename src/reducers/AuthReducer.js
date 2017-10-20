import {EMAIL_CHANGED} from '../actions/types';

const INITIAL_STATE = {email: ''}; //Initial state as an empty strubg

export default (state = INITIAL_STATE, action)  => { //if no state then it sets the initial state
    switch(action.type){    
        //state object needs to be updated carefully     
        case EMAIL_CHANGED: 
            return {...state, email: action.payload}; //create a brand new object which pr
        default: 
            return state;
    }
}