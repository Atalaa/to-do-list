import React, { useState, useRef, useEffect } from 'react';

const TaskForm = (props) => {
  const [task, setTask] = useState("");
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
    props.onAdd(task);
    setTask("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        ref={inputEl}
        className="task-input edit" 
        maxLength = "30"
        type="text"
        name="item" 
        value={task} 
        placeholder="Add a task..."
        onChange={handleChange} />

      <button type="submit" 
        className="task-button edit" 
        variant="contained" 
        style={{backgroundColor:'#fdcb6e'}}> 
        
        Add

      </button>
    </form>
  );
};

export default TaskForm;