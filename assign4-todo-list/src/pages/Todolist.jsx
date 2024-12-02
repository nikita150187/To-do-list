import React, { useState } from 'react';

function TodoList  () {
  const [tasks, setTasks] = useState(["Wakeup early ", "Take a shower", "Eat Breakfast", "Go to the Office", "Call your Friend", "Go to the Gym"]);
  const [newTask, setNewtask] = useState('');

  function handleInputChange(event){
    setNewtask(event.target.value);
  }
  function addTask(){
    if(newTask.trim() !==""){
      setTasks(t => [...t, newTask]);
      setNewtask("");
    }
  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setNewtask("");
  }

  function moveTaskUp(index){
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);

    }
  }


  function moveTaskDown(index){
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);

    }
  }
  return(
  <div className='to-do-list'>
    <h1>To-Do-List</h1>
     <div>
      <input type="text" placeholder='Enter a task...'
      value={newTask}
      onChange={handleInputChange} />
      <button className='add-btn' onClick={addTask}>Add</button>
     </div>

     <ol>
      {tasks.map((tasks, index) => 
      <li key={index}>
        <span className='text'>{tasks}</span>
        <button className='delete-btn'onClick={() => deleteTask(index)}>
          
          

        </button>

      </li>
      )}
     </ol>

  </div>);



  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <div className="task-buttons">
              <button onClick={() => moveUp(index)}>⬆️</button>
              <button onClick={() => moveDown(index)}>⬇️</button>
              <button onClick={() => removeTask(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
