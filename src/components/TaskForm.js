import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';

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
    <div className="form">
      <form onSubmit={handleSubmit} className="task-form">
        <input 
          ref={inputEl}
          className="task-input" //me 
          maxLength = "20"
          type="text"
          name="item" 
          value={task} 
          placeholder="Add a task..."
          onChange={handleChange} />

        <Button 
          className="task-button" //me
          type="submit"
          variant="contained" 
          style={{backgroundColor:'#fdcb6e'}}> 
          
          Add

        </Button>
      </form>
    </div>
  );
};

export default TaskForm;