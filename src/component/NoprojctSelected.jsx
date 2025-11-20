export default function NoprojctSelected({ onStartAddProject }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-gray-600 p-4">
            <div className="text-center space-y-4 max-w-md">
                <div className="text-6xl mb-4">📋</div>
                <h2 className="text-3xl md:text-4xl font-bold">No Project Selected</h2>
                <p className="text-base md:text-lg text-gray-600">Please select a project from the sidebar or create a new one to get started.</p>
                <button 
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-base" 
                    onClick={onStartAddProject}
                >
                    Create New Project
                </button>
            </div>
        </div>
    )
}