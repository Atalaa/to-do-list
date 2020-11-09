import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  //Save input value in input box
  const [inputValue, setInputValue] = useState("");
  
  // One variable that holds the id , can be erased. If in TaskItem it will create new one for each li and state won't change
  const [editId, setEdit] = useState(false);


  const handleEditChange = (id, text, setIsEditAnimated) => {
    setEdit(id);
    setInputValue(text);
    setIsEditAnimated(true);
  };


  const addTask = task => {
    if(!task.task || /^\s*$/.test(task.task)) { //avoid space typing
      return;
    }
    setTaskList( prevTask => {
      return [...prevTask, task];
    }); 
  };


  const updateTask = (id, newText) => {
    if(!newText || /^\s*$/.test(newText)) { //avoid space typing
      return;
    }
    setTaskList(prevValue => {
      return prevValue.map( currentItem => { 
        if(currentItem.id === id) {
          currentItem.task = newText;
        } 
        return currentItem;
      })
    });
    setEdit(false);
  };


  const deleteTask = id => {
    setTaskList(prevValue => {
      return prevValue.filter( (currentItem, index) => {
        return index !== id;
      })
    });  
  };


  const completeTask = id => {
    setTaskList(taskList.map( currentItem => { 
        if(currentItem.id === id) {
          currentItem.completed = !currentItem.completed;
        } 
        return currentItem;
    }));
  };


  return (
    <div>

      <TaskForm onAdd={addTask} 
/>

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

                completed={currentItem.completed}  
                completedTask={completeTask}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default TaskList;