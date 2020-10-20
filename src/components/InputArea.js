import React, { useState } from 'react';

const InputArea = (props) => {
  const [task, setTask] = useState("");
  
  const handleChange = (e) => {
    const newVvalue = e.target.value;
    setTask(newVvalue);
  };

  return (
    <div className="form">
      <form>
        <input name="item" value={task} type="text" onChange={handleChange} />
        <button onClick={(e) => {
          e.preventDefault();
          props.onAdd(task);
          setTask("");
        }}>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default InputArea;