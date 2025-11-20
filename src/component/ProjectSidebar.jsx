import SelectedProject from "./SelectedProject";
export default function ProjectSidebar({ onStartAddProject, projcts, onSelectProject , selectedprojectId}) {
    return (
        <aside className="w-full md:w-72 p-4 md:p-6 bg-linear-to-b from-slate-800 to-slate-900 md:rounded-r-xl md:h-full rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Your Projects</h2>

            <div className="mb-6">
                <button
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm md:text-base"
                    onClick={onStartAddProject}
                >
                    + New Project
                </button>
            </div>

            <ul className="space-y-2 max-h-96 overflow-y-auto">

                {projcts.map((projct) => {
                   let cssclasses = "w-full text-left px-3 py-2 my-1 rounded-lg transition text-sm md:text-base font-medium"

                    if (selectedprojectId === projct.id) {
                        cssclasses += " text-white bg-blue-600 shadow-lg"
                    }
                    else {
                        cssclasses += " text-slate-300 hover:text-white hover:bg-slate-700"
                    }
                    return (
                        <li key={projct.id}>
                            <button className={cssclasses} onClick={() => onSelectProject(projct.id)}>{projct.title}</button>
                        </li>
                    )
                }
                )
                }


            </ul>
        </aside>
    );
}
