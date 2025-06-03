import type { TaskData } from './Task.tsx'
import { Task } from './Task.tsx'
import './Index.css'

function App() {

  const taskData: TaskData = {
    id: 1,
    title: "Sweep the Kitchen",
    description: "Get under the cabinets, do a good job",
    initialCheck: true 
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Task taskData={taskData} />
    </div>
  )
}

export default App
