import React from 'react';

const ListItem = ({description, completed}) => {
    return(
        <li className={`list-group-item ${completed ? 'bg-success' : 'bg-danger'} text-white mt-3 d-flex justify-content-center align-item-centre`}>
          {description} 
        </li>
    );
}

export default ListItem;