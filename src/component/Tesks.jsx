import NewTasks from "./NewTasks"
export default function Tasks( { tasks,onAddTask ,onDeleteTask, projectId}) {
    
    // Filter tasks for the current project
    const projectTasks = tasks.filter(task => task.projectid === projectId);
    
    return (
        <section className="w-full">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">📋 Tasks</h2>
            <NewTasks  onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
            {projectTasks.length === 0 &&  <p className="text-gray-600 mb-4 text-center py-4">This project has no tasks yet</p>}
            <ul className="p-4 rounded-lg bg-gray-50 space-y-2">
                {projectTasks.map((task) => (
                    <li key={task.id} className="flex justify-between items-center gap-4 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                        <span className="text-gray-800 text-base">{task.task}</span>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition font-semibold text-sm md:text-base shrink-0" onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}   