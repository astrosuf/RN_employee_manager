import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions'
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'}); //if shift isn't set then default it to Monday
    }


    render() {
        
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress ={this.onButtonPress.bind(this)}> 
                        Create    
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm; //this is because we set the key as 'employeeForm' in the combineReducers call

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate); 
/*
connect (argument 1, argument 2)(this component);

argument 1: used for mapStateToProps function
argument 2 : action creator

*/