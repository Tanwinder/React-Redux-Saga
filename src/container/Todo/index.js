/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Input, Button } from 'reactstrap'

import { connect } from 'react-redux'

import TodoList from '../../presentational/todoList'

import { updateValue, addItem} from './types'



class Todo extends Component {
    onChange = (e) => {
        this.props.dispatch(updateValue(e.target.value))
    }
    addItem = () => {
        const gh = this.props.listData.indexOf(this.props.value) === -1;
        if(this.props.value && gh) {
            this.props.dispatch(addItem(this.props.value))
        }
        
    }
    KeyUpAddItem = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const gh = this.props.listData.indexOf(this.props.value) === -1;
            this.props.value && gh && this.props.dispatch(addItem(this.props.value))
        }
    }
    render() {
        const { todo } = this.props;
        console.log("todo", todo);
        return (
            <React.Fragment>
                <div style={{ display: 'flex'}}>
                <Input 
                type="text" 
                value={this.props.value}
                onChange={this.onChange}
                onKeyUp={this.KeyUpAddItem} />
                <Button  style={{padding: '3px', flex: '1 1 100%'}} color="info" onClick={this.addItem}> Add Item</Button>
                </div>
                <TodoList
                    items={this.props.listData} 
                    loader={this.props.loader}/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
    todo: state.todo,
    value: state.todo.value,
    listData: state.todo.listData,
    loader: state.todo.loader
})

// const mapDispatchToProps = dispatch => ({
//     updateValue: (val) => dispatch(updateValue(val))
// })

export default connect( mapStateToProps)(Todo);