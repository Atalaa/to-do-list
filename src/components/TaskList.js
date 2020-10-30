import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  
  const addTask = task => {
    if(!task || /^\s*$/.test(task)) { //avoid space typing
      return;
    }
    setTaskList( prevTask => {
      return [task, ...prevTask];
    }); 
  };

  const updateTask = (id, newText) => {
    if(!newText || /^\s*$/.test(newText)) { //avoid space typing
      return;
    }
    setTaskList(preValue => {
      return preValue.map( (currentItem, index) => { 
        console.log('map', index === id ? newText : currentItem);
        return (index === id ? newText : currentItem); //return all value string + the one edited - individually
      })
    });
  }

  const deleteTask = id => {
    setTaskList(preValue => {
      return preValue.filter( (currentItem, index) => {
        return index !== id;
      })
    });
  };


  return (
    <div>

      <TaskForm onAdd={addTask} />

      <div>
        <ul>        
          {
            taskList.map((currentItem, index) => (
              <TaskItem 
                key={index} 
                id={index} 
                onDelete={deleteTask}
                onEdit={updateTask}
                text={currentItem} 
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default TaskList;