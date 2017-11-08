import firebase from 'firebase';
import {
    EMPLOYEE_UPDATE
} from './types.js'



export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth(); //gets the current user
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift}); //backticks in ES6 let you inject variables into a string.
};