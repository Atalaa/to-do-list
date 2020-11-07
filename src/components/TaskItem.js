import React, { useState, useRef, useEffect } from 'react';
import 'animate.css/animate.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';


const TaskItem = ({id, onDelete, editId, currentItem, onEdit, inputValue, setInputValue, handleEditChange }) => {

  const [isEditAnimated, setIsEditAnimated] = useState(false);
  const inputEl = useRef(null);

  
  useEffect(() => {
    if(editId === currentItem.id){
      inputEl.current.focus();
    }
  });


  const handleChange = e => {
    const newVvalue = e.target.value;
    setInputValue(newVvalue);
  };


  const handleEdit = e => {
    e.preventDefault();
    onEdit(currentItem.id, inputValue);
  }




  return (
    <>
      {
        editId === currentItem.id &&
        <div>

          <form className="form edit" onSubmit={handleEdit}>
            <input 
                ref={inputEl}
                className="task-input edit" 
                maxLength = "30"   
                type="text"
                name="item" 
                value={inputValue} 
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
        editId !== currentItem.id &&

          <div className={isEditAnimated ? 'taskItem' : 'taskItem animate__animated animate__zoomIn'} >

            <li>{currentItem.task}</li>
            <div className="icons"> 
              <EditIcon 
                onClick={() => handleEditChange(currentItem.id, currentItem.task, setIsEditAnimated)} 
              />

              <DeleteForeverIcon 
                onClick={() => onDelete(id)}
              />
            </div>
          </div>
      }
    </>
  );
};

export default TaskItem; 