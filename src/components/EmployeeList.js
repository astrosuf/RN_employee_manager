import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';
import {ListView} from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component{

    componentWillMount() {
        this.props.employeeFetch(); //first time no employees will be available, async message

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props the component will be rendered with
        //this.props is still the old set of props

        this.createDataSource(nextProps);

    }

    createDataSource({employees}){ //helper method to ensure that doesn't matter how the comp is rendered its correct.
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee}/>
    }

    render(){
        return (
           <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
           />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val,uid) => {
        return {...val, uid};
    });

    return { employees };
}

export default connect(mapStateToProps, {employeeFetch}) (EmployeeList);