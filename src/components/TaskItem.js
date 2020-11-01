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


  // const handleEdit = e => {
  //   e.preventDefault();
  //   props.onEdit(props.currentItem.id, inputValue)    


  //   setSaveEdit(prevState => {
  //     return !prevState;
  //   })
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
    
  //   props.onEdit(props.currentItem.id, props.inputValue);
  //   // props.onAdd({
  //   //   task: props.inputValue, 
  //   //   // id: props.currentItem.id
  //   // });
  // }

  return (
    <div className={isDone ? 'taskItem done' : 'taskItem'} >

      {
        props.editId === props.currentItem.id &&

          <form className="form">
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
            <button onClick={ () => props.onEdit(props.currentItem.id, props.inputValue) }
              type="submit" 
              className="task-button edit" 
              style={{color: '#333', backgroundColor:'#1dd1a1'}}>
              Save
            </button>
          </form>
      }

      {
        props.editId !== props.currentItem.id &&

      <>
        <li>{props.currentItem.task}</li>

        <div className="icons">
          <EditIcon onClick={() => props.handleEditChange(props.currentItem.id, props.currentItem.task)} />
          <DeleteIcon onClick={() => props.onDelete(props.id)} />
        </div>
        </>
      }
        
      
    </div> 
  );
};

export default TaskItem; 
