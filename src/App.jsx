import { useState } from 'react'
import NewProject from './component/NewProject'
import NoprojctSelected from './component/NoprojctSelected'
import SelectedProject from './component/SelectedProject'
import ProjectSidebar from './component/projectSidebar'

function App() {
  const [showNewProject, setShowNewProject] = useState({
    selectedprojectId: undefined,
    projcts: [],
    tasks: [],
  })

  function handleAddTask(task) {
    setShowNewProject(prevState => {
      const taskid = Math.random();
      const newtask = {
        task: task,
        projectid: prevState.selectedprojectId,
        id: taskid,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newtask],
      }
    })
  }

  function handleDeleteTask(id) {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedprojectId: id,
      }
    })
  }

  function handleStartAddProject() {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedprojectId: null,
      }
    })
  }

  function handleAddProject(projectdata) {
    setShowNewProject(prevState => {
      const projectid = Math.random();
      const newprojct = {

        ...projectdata,
        id: projectid,
      };
      return {
        ...prevState,
        selectedprojectId: undefined,
        projcts: [...prevState.projcts, newprojct],
      }
    })
  }

  function handleCancelAddProject() {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        selectedprojectId: undefined,
      }
    })
  }

  function handleDeleteProject(id) {
    setShowNewProject(prevState => {
      return {
        ...prevState,
        projcts: prevState.projcts.filter(project => project.id !== id),
        selectedprojectId: undefined,
      };
    });
  }



  const selectedProject = showNewProject.projcts.find(project => project.id === showNewProject.selectedprojectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={showNewProject.tasks} />;

  if (showNewProject.selectedprojectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }
  else if (showNewProject.selectedprojectId === undefined) {
    content = <NoprojctSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-8">
      <div className="shrink-0">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projcts={showNewProject.projcts} onSelectProject={handleSelectProject}  selectedprojectId={showNewProject.selectedprojectId}  />
      </div>
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-2rem)] md:min-h-auto">
        {content}
      </div>
    </main>
  )
}

export default App
