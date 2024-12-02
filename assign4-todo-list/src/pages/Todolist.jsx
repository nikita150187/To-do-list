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
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
    if (index < tasks.length - 1){
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
        <button className='delete-btn'onClick={() => deleteTask(index)}>Delete
        </button>
        <button className='move-btn' onClick={() => moveTaskUp(index)}>Up</button>
        <button className='move-btn' onClick={() => moveTaskDown(index)}>Down</button>
    

      </li>
      )}
     </ol>

  </div>);



 };

export default TodoList;
