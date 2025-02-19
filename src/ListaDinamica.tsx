import { useState } from 'react';

function ListaDinamica () {
    const [tasks, setTasks] = useState < string[] > ([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }; 

    
    return (
    <div>
        <h2>Lista de tareas</h2>
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Nueva tarea...'
        />
        <button onClick={addTask}>Agregar</button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    </div>
    );
}
export default ListaDinamica;