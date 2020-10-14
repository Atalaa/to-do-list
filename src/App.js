import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    const newVvalue = e.target.value;
    setTask(newVvalue);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTaskList((prevTask) => {
      return [...prevTask, task];
    });
    setTask("");
  };

  const deleteTask = (index) => {
    const arrList = [...taskList];
    arrList.splice(index, 1);
    console.log(arrList);

    setTaskList(arrList);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <form>
          <input name="item" value={task} type="text" onChange={handleChange} />
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </form>
      </div>

      <div className="list">
        <ul> <ToDoItem text={taskList} deleteTask={deleteTask}/></ul>
      </div>

    </div>
  );
}

export default App;
