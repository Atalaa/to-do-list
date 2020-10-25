import React from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container">
      <Header />
      <TaskList />
    </div>
  );
};

export default App;
