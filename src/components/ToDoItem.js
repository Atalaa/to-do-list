import React, { useState } from 'react';

const ToDoItem = (props) => {
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(prevValue =>{   //instead of bunch of if/else
      return !prevValue;
    });
  };


  return (
    <div onClick={handleClick}>
      {
        props.text.map((toDoItem, index) => (
            <li key={index} style={{ textDecoration: isCrossed ? "line-through" : "none" }}>
              <span className="close" onClick={() => props.deleteTask(index)}>X</span>
              {toDoItem}
            </li>
          ))
      }
    </div>
  );
};

export default ToDoItem;