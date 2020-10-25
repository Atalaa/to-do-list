import React, { useState } from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="todo-app">
      <div className="container">
        <Header />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
