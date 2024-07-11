import React, {useState } from 'react';

export function ToDoList ({ }) {

const [todos,setTodos]=useState(["Go to work","Drive the car","Go to Publix"]);
const [task,setTask]=useState("");

const addTask = () => {
    if (task.trim() !=='') {
        setTodos([...todos, task]);
        setTask('');
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
const handleDelete = (index) => {
    const newTodos = todos.filter((todos,i) =>i !== index);
    setTodos(newTodos);
};

return (
<div className="w-3/4 flex flex-col items-center border-2 rounded-lg border-black">
    <h1 className="text-xl mt-5">To Do List</h1>
    <div>
        <input  className="w-full border-2 rounded-lg border-black" 
                placeholder="Enter new task!" 
                value={task}
                onChange={handleChangeTask}
                onKeyDown={handleEnterKey}
        />
    </div>
    <div className="w-1/2 border-2 rounded-lg border-gray">
        <ul>
            {todos.map((todos,index) => (
                <li className="flex justify-between mr-2" key={index}>{todos} {index}
                <button onClick={() => handleDelete (todos.id)} class="ml-auto text-[10px] text-white hover:text-red-500 rounded">
                    X
                </button>
                </li>
            ))}
        </ul>
    </div>
    <div className="w-1/2 border-2 rounded-lg border-gray">
       {todos.length}
            <p>To do items left:&nbsp;{todos.length}</p>
    </div>


</div>
  );
}