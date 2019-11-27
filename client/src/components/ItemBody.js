import React, { Component } from 'react';
import ListItems from './LitsItems'
import ListItem from './ListItem'
import axios from 'axios';
import _ from 'lodash';

class ItemBody extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            loading: true,
            todo: {}
        } 
    }

    componentDidMount(){
        axios.get('/api/todo').then(response=> {
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
            <ListItems>
               {this.renderTodos()}
            </ListItems>
        )
    }

}

export default ItemBody;