import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const InputArea = (props) => {
  const [task, setTask] = useState("");
  
  const handleChange = (e) => {
    const newVvalue = e.target.value;
    setTask(newVvalue);
  };

  return (
    <div className="form">
      <form>
        <input 
          maxLength = "15"
          type="text"
          name="item" 
          value={task} 
          placeholder="Take a note..."
          onChange={handleChange} />

        <Button variant="contained" style={{backgroundColor:'#fdcb6e'}} onClick={(e) => {
            e.preventDefault();
            props.onAdd(task);
            setTask("");
          }}>        
          Add
        </Button>

      </form>
    </div>
  );
};

export default InputArea;