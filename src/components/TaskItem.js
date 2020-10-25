import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TaskForm from './TaskForm';


const TaskItem = (props) => {
  // const [isDone, setIsDone] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = value => {
    props.onEdit(props.id, value);
    setEdit(false);
  };

  if(edit){
    return <TaskForm edit={edit} onAdd={handleEdit} />
  }


  return (
    // <div className={isDone ? 'taskItem done' : 'taskItem'}>
    <div>

      <li style={{backgroundColor:'red'}}>{props.text}</li>

      <div className="icons">
        <EditIcon className="editIcon" onClick={() => setEdit(true)}/>
        <DeleteIcon className="deleteIcon" onClick={() => props.onDelete(props.id)} />
      </div>
    </div>
  );
};

export default TaskItem; 