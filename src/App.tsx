import type { TaskData } from './Task.tsx'
import { Task } from './Task.tsx'
import { TaskList } from './TaskList.tsx'
import './Index.css'

function App() {

  const taskData: TaskData = {
    id: 1,
    title: "Sweep the Kitchen",
    description: "Get under the cabinets, do a good job",
    initialCheck: true 
  }

  const task_list: TaskData[] = [
    {
      id: 1,
      title: "Sweep the Kitchen",
      description: "Get under the cabinets, do a good job",
      initialCheck: true 
    },
    {
      id: 2,
      title: "Make Dinner",
      description: "Maybe chickpea curry tonight?",
      initialCheck: false
    },
    {
      id: 3,
      title: "Walk the Dog",
      description: "You need the exercise too",
      initialCheck: false
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <TaskList tasks={task_list} />
    </div>
  )
}

export default App
