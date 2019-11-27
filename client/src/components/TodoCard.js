import React, { Component } from 'react';
import ListItems from './LitsItems'
import ListItem from './ListItem'
import axios from 'axios';
import _ from 'lodash';
import SingleTodoItem from './SingleTodoItem';
import CreateEditTodo from './CreateEditTodo';

class TodoCard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            editing: false,
            description: props.description,
            completed: props.completed
        } 
    }

    onEdit = () => {
        this.setState({editing: !this.state.editing});
    } 

    componentDidMount(){
        axios.get('/api/todo').then(response=> {
            this.setState({loading: false, todo: response.data })
        })
    }

    updateState = (description, completed) => {
        this.setState({
            description: description,
            completed: completed
        })
    }

    render(){
        const { description, completed } = this.props.todo;
        // console.log(this.props.todo)
        if(this.state.editing) {
            return (
                <CreateEditTodo description={description} completed={completed} updateState={()=>this.updateState()} toggleEdit={()=> this.onEdit()} id={this.props.todo.id} />
            )
        }
        return(
            <SingleTodoItem description={description} completed={completed} onEdit={()=> this.onEdit()}/>
        )
    }

}

export default TodoCard;