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

  const editTask = (id, newText) => {
    if(!newText || /^\s*$/.test(newText)) { //avoid space typing
      return;
    }
    setTaskList(preValue => {
      return preValue.map( (currentItem, index) => { 
        console.log('newText', newText);
        console.log('return', index === id ? newText : currentItem);
        return (index === id ? newText : currentItem);
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

      <div className="list">
        <ul>        
          {
            taskList.map((currentItem, index) => (
              <TaskItem 
                key={index} 
                id={index} 
                text={currentItem} 
                onDelete={deleteTask}
                onEdit={editTask}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default TaskList;