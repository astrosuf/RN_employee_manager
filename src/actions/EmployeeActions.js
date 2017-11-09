import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS
} from './types.js'



export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

//we need to retun an actual action here.
export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth(); //gets the current user
    
    console.log(Actions);

    return (dispatch) => { //we are not using the dispatch method and we are tricking it to think we are using REDUX-THUNK
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => 
            {
                dispatch({type: EMPLOYEE_CREATE}); //dispatch action to clear the fields
                Actions.employeeList({type: 'reset'}) //reset prevents a back button from showing up
            }); //backticks in ES6 let you inject variables into a string.
    };
};

export const employeeFetch = () => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => { //snapshot is not actually the data snapshot.val() is what gets you the data
                dispatch ({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};