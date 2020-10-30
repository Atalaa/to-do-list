import React, { useState, useRef, useEffect } from 'react';

const TaskForm = (props) => {
  const [task, setTask] = useState(props.edit ? props.text : '');
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
    // <form className="form" onSubmit={handleSubmit}>
    <div>
    {
      props.edit ?
      <form className="form edit" onSubmit={handleSubmit}>
        <input 
          ref={inputEl}
          className="task-input edit" 
          maxLength = "20"
          type="text"
          name="item" 
          value={task} 
          placeholder={"Edit your task ..."}
          onChange={handleChange} 
          style={{border:'2px solid #1dd1a1'}}
        />
        <button 
          type="submit" 
          className="task-button edit" 
          style={{color: '#333', backgroundColor:'#1dd1a1'}}>
          
          Save
          
        </button>
      </form>

      :

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
    }
    
    </div>
  );
};

export default TaskForm;