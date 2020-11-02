import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
  const [task, setTask] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  });

  const handleChange = e => {
    const newVvalue = e.target.value;
    setTask(newVvalue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onAdd({
      task: task, 
      id: uuidv4()
    });
    setTask("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
          ref={inputEl}
          className="task-input" 
          maxLength = "20"
          type="text"
          name="item" 
          value={task} 
          placeholder={"Add a task ..."}
          onChange={handleChange} 
        />
      <button type="submit" className="task-button">Add</button>
    </form>
  );
};

export default TaskForm;