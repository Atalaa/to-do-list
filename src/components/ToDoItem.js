import React from 'react';

const ToDoItem = (props) => {
  return (
      <li>
        {props.text}
        <span className="close" onClick={() => props.deleteTask(props.id)}>X</span>
      </li>
  );
};

export default ToDoItem; 