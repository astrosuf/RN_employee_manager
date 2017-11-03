import {EMPLOYEE_UPDATE} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name', value: 'jane'}
            return {...state, [action.payload.prop]: action.payload.value}; //square braces are key interperlation NOT an ARRAY!
        default: 
            return state;
    }
}