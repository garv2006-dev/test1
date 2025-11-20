import { useState } from "react"
export default function NewTasks({onAddTask ,onDeleteTask}){

    const [newTask, setNewTask] = useState("")
    
    function handleChange(e){
        setNewTask(e.target.value)
    }

    function handleClick(){
        if(newTask === "") {
            return;
        }
        onAddTask(newTask)
        setNewTask("")
    }

    return(
        <div className="flex gap-2 mb-4">
            <input type="text" onChange={handleChange} value={newTask} placeholder="Add a new task..." className="border-2 border-gray-300 p-3 md:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 text-base md:text-lg transition placeholder-gray-400" />
            <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm md:text-base whitespace-nowrap">Add Task</button>
        </div>
    )
}