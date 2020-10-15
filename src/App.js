import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    const newVvalue = e.target.value;
    setTask(newVvalue);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTaskList((prevTask) => {
      return [...prevTask, task];
    });
    setTask("");
  };

  const deleteTask = (id) => {
    setTaskList(preValue => {
      return preValue.filter( (item, index) => {
        return index !== id;
      })
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <form>
          <input name="item" value={task} type="text" onChange={handleChange} />
          <button onClick={addTask}>
            <span>Add</span>
          </button>
        </form>
      </div>

      <div className="list">
        <ul>  
          {
            taskList.map((toDoItem, index) => (
              <ToDoItem key={index} id={index} text={toDoItem} deleteTask={deleteTask} />
            ))
          }
            
        </ul>
      </div>

    </div>
  );
}

export default App;
