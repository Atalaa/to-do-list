import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList( prevTask => {
      return [...prevTask, task];
    });
  };

  const deleteTask = (id) => {
    setTaskList(preValue => {
      return preValue.filter( (currentItem, index) => {
        return index !== id;
      })
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onAdd={addTask} />

      <div className="list">
        <ul>  
          {
            taskList.map((toDoItem, index) => (
              <ToDoItem 
                key={index} 
                id={index} 
                text={toDoItem} 
                onDelete={deleteTask}
              />
            ))
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
