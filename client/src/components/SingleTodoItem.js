import React from 'react';


// className={`card ${completed ? 'bg-success' : 'bg-danger'} text-black `} 

const SingleTodoItem = ({description, completed, onEdit}) => {
    return(
        <div className={`card ${completed ? 'bg-success' : 'bg-danger'} text-white `}>
            <div className="card-block ml-2 mt-2 mr-2" >
                <div className="card-title">
                    <h4>{description}</h4>
                </div>
                <div className="card-text">
                    { completed ? "ITS COMPLETED" : "ITS NOT YET DONE"}
                </div>
                <div className="d-flex justify-content-between align-items-end mt-4">
                    <button className="btn btn-link text-white">Delete</button>
                    <button className="btn btn-link text-white" onClick={onEdit} >Edit</button>
                </div>
            </div>
        </div>
    );
}

export default SingleTodoItem;