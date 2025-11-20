import Tasks from "./Tesks";
export default function SelectedProject({ project, onDelete, onAddTask ,onDeleteTask,tasks}) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="flex justify-center w-full h-full p-4">
            <div className="bg-white shadow-lg rounded-xl w-full md:w-[600px] max-w-2xl text-gray-700 p-6 md:p-8">
                
                {/* Title + Delete Button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{project.title}</h2>

                    <button
                        onClick={() => onDelete(project.id)}
                        className="w-full md:w-auto bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-semibold"
                    >
                        Delete
                    </button>
                </div>

                {/* Date */}
                <p className="text-sm md:text-base text-gray-500 mb-6 font-medium">
                    📅 {formattedDate}
                </p>

                {/* Description */}
                <div className="mb-8">
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-lg">
                        {project.description}
                    </p>
                </div>

                {/* Tasks Section */}
                <div className="border-t-2 border-gray-200 pt-6">
                    <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} projectId={project.id} />
                </div>
            </div>
        </div>
    );
}
