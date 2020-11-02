import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {

  //Save input value in input box
  const [inputValue, setInputValue] = useState("");
  
  // One variable that holds the id , can be erased. If in TaskItem it will create new one for each li and state won't change
  const [editId, setEdit] = useState(false);

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };

  const [taskList, setTaskList] = useState([]);

  const addTask = task => {
    if(!task.task || /^\s*$/.test(task.task)) { //avoid space typing
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
      return preValue.map( currentItem => { 
        if(currentItem.id === id) {
          currentItem.task = newText;
        } 
        return currentItem;
      })
    });
    setEdit(false);
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
                onAdd={addTask}
                onDelete={deleteTask}
                onEdit={updateTask}
                currentItem={currentItem} 

                inputValue={inputValue}
                setInputValue={setInputValue}
                handleEditChange={handleEditChange}
                editId={editId}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default TaskList;