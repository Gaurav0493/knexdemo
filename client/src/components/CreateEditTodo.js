import React, { Component } from 'react';
import ListItems from './LitsItems'
import ListItem from './ListItem'
import axios from 'axios';
import _ from 'lodash';

class CreateEditTodo extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            description: props.description || '',
            completed: props.completed || false
        }
    }

    componentDidMount(){
        axios.get('/api/todo').then(response=> {
            this.setState({loading: false, todo: response.data })
        })
    }

    onChangeItem = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.id);
        const { description, completed } = this.state;
        const id  = this.props.id;

        if(id) {
            axios.put(`/api/todo/${id}`, {
                description: description,
                completed: completed === true
            }).then(()=>{
                this.props.updateState(description,completed === true);
                this.props.toggleEdit();
            })
        } 
        else {
            axios.post(`/api/todo`, {
                description: description,
                completed: completed
            }).then(()=>{
                this.props.toggleEdit();
            })
        }
    }

    render(){
        const { description, completed } = this.state;
        return(
           <form onSubmit={(e)=>this.handleSubmit(e)}>
               <div className="form-group">
                   <label htmlFor="description" > Title of todo</label>
                   <input name="description" type="text" className="form-control" id="description" value={description} onChange={ (e) => this.onChangeItem(e)} />
               </div>
               <div className="form-group">
                   <label htmlFor="completed" >Is todo item completed ?</label>
                   <select name="completed" type="text" className="form-control" id="completed" value={completed} onChange={(e) => this.onChangeItem(e)}>
                       <option value="true">Yes</option>
                       <option value="false">Not yet</option>
                   </select>
               </div>
               <div className="d-flex justify-content-between align-items-center">
                   <button className="btn btn-primary" type="submit">Submit</button>
                   <button className="btn btn-danger" type="button" onClick={this.props.toggleEdit}>Cancel</button>
               </div>
           </form>
        )
    }

}

export default CreateEditTodo;