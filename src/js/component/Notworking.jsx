import React, {useState } from 'react';

export function ToDoList ({ }) {

const [todos,setTodos]=useState([]);
const [task,setTask]=useState("");

const addTask = () => {
    if (task.trim() !=='') {
        setTodos([...todos, setTask]);
        setTodos('');
    }
};

const handleChangeTask = (ev) => {
    setTask(ev.target.value);
};

const handleEnterKey = (ev) => {
    if(ev.key === "Enter") {
        addTask();
    }
};

return (
<div className="w-3/4 flex flex-col items-center border-2 rounded-lg border-black">
    <h1 className="text-xl mt-5">To Do List</h1>
    <div>
        <input  className="w-full border-2 rounded-lg border-black" 
                placeholder="Enter new task!" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                OnKeyPress={handleEnterKey}
        />
    </div>
    <div className="w-1/2 border-2 rounded-lg border-gray">
       <ul>
            {todos.map((todos,index) => (
                <li key={index}>{todos}</li>
            ))};
       </ul>
    </div>


</div>
  );
}