import PropTypes from 'prop-types';
import React , { useState } from "react";

function Task() {
    const [tasks , setTasks] = useState([ ]);
    const [newtask , setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newtask.trim() !== ""){
            setTasks(t => [...t , newtask]);
            setNewTask("");
        }  
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_ , i) => i!== index );
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index -1] , updatedTasks[index]] = [updatedTasks[index] , updatedTasks[index-1]] ;
            setTasks(updatedTasks);
        }       
    }

    const moveTaskDown = (index) => {
        if(index > tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index +1] , updatedTasks[index]] = [updatedTasks[index] , updatedTasks[index+1]] ;
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">

            <h1>To Do List</h1>

            <input 
            type="text" placeholder='Enter task...' value={newtask} onChange={handleInputChange} />

            <button className='add-button' onClick={addTask}>Add Task</button>

            <ol>
                {tasks.map((task , index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>       
                        <button className='delete-button' onClick={()=> deleteTask(index)}>Delete Task</button> 
                        <button className='move-button' onClick={()=> moveTaskUp(index)}>☝️</button>
                        <button className='move-button' onClick={()=> moveTaskDown(index)}>👇</button>           
                    </li>

                    
                )}
            </ol>

        </div>

        

    )

}


export default Task