import React, { useState, useRef } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TaskForm from './TaskForm';


const TaskItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [isDone, setIsDone] = useState(false);


  const handleEdit = value => {
    props.onEdit(props.id, value);
    setEdit(prevState => {
      return !prevState;
    })
  };

    if(edit){
      return <TaskForm edit={edit} text={props.text} onAdd={handleEdit} />
    }
    

  return (
    <div className={isDone ? 'taskItem done' : 'taskItem'} >

      <li>{props.text}</li>

      <div className="icons">
        <EditIcon onClick={() => setEdit(true)} />
        <DeleteIcon onClick={() => props.onDelete(props.id)} />
      </div>
    </div>
  );
};

export default TaskItem; 

// const filt = () =>{
  //   setEdit(true);
  //   console.log(props.id);
  //   const res = props.taskList.filter( (currentItem, index) => {
  //     return index !== props.id
  //   });


  //   console.log(res);

  // }