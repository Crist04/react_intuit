import { useState } from "react";
import './todoStylesheet.css';


function ToDoList() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleClick = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if (task === "") alert("Cannot add empty task")
        else {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask("");
        }

    }
    const completedTask = (index) => {
        const newTask = tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t)
        setTasks(newTask)
    }

    const deleteTask = (item) => {
        const newTask = tasks.filter((t) => t.text !== item)
        setTasks(newTask)
    }

    return (
        <div id="container">
            <h1> To Do List </h1>
            <div id="input">
                <input placeholder="Enter the task" type="text" value={task} onChange={handleClick} />
                <button onClick={addTask}>Add</button>
            </div>
            <ul >
                {tasks.map((t, index) => (
                    <div id="list"> 
                        <li key={index}
                        style={{ textDecoration: t.completed ? 'line-through' : 'none'}}>{t.text}</li>
                        <button onClick={() => completedTask(index)}>{t.completed ? "Undo" : "Complete"}</button>
                        <button onClick={() => deleteTask(t.text)}>Delete</button>
                    </div>
                ))
                }
            </ul>
        </div>
    )
}

export default ToDoList;