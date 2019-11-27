import React, { Component } from 'react';
import ListItems from './LitsItems'
import ListItem from './ListItem'
import axios from 'axios';
import _ from 'lodash';
import TodoCard from './TodoCard'

class SingleItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            loading: true,
            todo: {}
        } 
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/todo/${id}`).then(response=> {
            this.setState({loading: false, todo: response.data })
        })
    }

    renderTodos(){
        return _.map(this.state.todo, todo => {
            return (
                <ListItem description={todo.description} completed={todo.completed}/>
            );
        });
    }

    render(){
        if(this.state.loading === true) {
            return (
                <h1>
                    Loading...
                </h1>
            )
        }
        return(
            <React.Fragment>
               <TodoCard todo={this.state.todo}/>
            </React.Fragment>
        )
    }

}

export default SingleItem;