import React, { useState, useRef, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const TaskItem = (props) => {

  const [isDone, setIsDone] = useState(false);
  const inputEl = useRef(null);
  
  useEffect(() => {
    if(props.editId === props.currentItem.id){
      inputEl.current.focus();
    }
  });

  const handleChange = e => {
    const newVvalue = e.target.value;
    props.setInputValue(newVvalue);
  };

  const handleEdit = e => {
    e.preventDefault();
    props.onEdit(props.currentItem.id, props.inputValue);

  }


  return (
    <>
      {
        props.editId === props.currentItem.id &&
        <div>

          <form className="form edit" onSubmit={handleEdit}>
            <input 
                ref={inputEl}
                className="task-input edit" 
                maxLength = "20"   
                type="text"
                name="item" 
                value={props.inputValue} 
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
        </div>
      }

      {
        props.editId !== props.currentItem.id &&

        <div className={isDone ? 'taskItem done' : 'taskItem'} >

          <li>{props.currentItem.task}</li>

          <div className="icons">
            <EditIcon onClick={() => props.handleEditChange(props.currentItem.id, props.currentItem.task)} />
            <DeleteIcon onClick={() => props.onDelete(props.id)} />
          </div>

        </div>
      }
    </>
  );
};

export default TaskItem; 
