import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
  // const [task, setTask] = useState(props.editId ? props.text : '');
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
    // props.onAdd(task);
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


    /* {
      props.editId ?

      <>
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
      </>
      :
      <>
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
      </>
    } */
  );
};

export default TaskForm;