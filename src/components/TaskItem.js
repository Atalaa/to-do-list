import React, { useState, useRef, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import 'animate.css/animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



const TaskItem = (props) => {

  const [isEditAnimated, setIsEditAnimated] = useState(false);
  const [isDeleteAnimated, setIsDeleteAnimated] = useState(false);
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

  const del = () => {
    props.onDelete(props.id);
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


      {////className="fas fa-pencil"
        props.editId !== props.currentItem.id &&

        <div className={isEditAnimated ? 'taskItem' : 'taskItem animate__animated animate__zoomIn'} >

          <li>{props.currentItem.task}</li>

          <div className="icons"> 
            <FontAwesomeIcon icon={faEdit} fixedWidth onClick={() => props.handleEditChange(props.currentItem.id, props.currentItem.task, setIsEditAnimated)} />
            {/* <EditIcon onClick={() => props.handleEditChange(props.currentItem.id, props.currentItem.task, setIsEditAnimated)} /> */}
            {/* <FontAwesomeIcon icon="spinner" spin onClick={() => props.handleEditChange(props.currentItem.id, props.currentItem.task, setIsEditAnimated)} /> */}
            <FontAwesomeIcon icon={faTrash} fixedWidth onClick={del}/>
            {/* <DeleteIcon onClick={() => props.onDelete(props.id, setIsDeleteAnimated)}/> */}
          </div>
        </div>
      }
    </>
  );
};

export default TaskItem; 
