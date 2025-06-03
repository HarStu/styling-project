import type { TaskData } from './Task.tsx'
import { Task } from './Task.tsx'
import { TaskList } from './TaskList.tsx'
import './Index.css'
import { useState } from 'react'

const initialTaskList: TaskData[] = [
  {
    id: 1,
    title: "Sweep the Kitchen",
    description: "Get under the cabinets, do a good job",
    check: true
  },
  {
    id: 2,
    title: "Make Dinner",
    description: "Maybe chickpea curry tonight?",
    check: false
  },
  {
    id: 3,
    title: "Walk the Dog",
    description: "You need the exercise too",
    check: false
  },
]

function App() {

  const [taskList, setTaskList] = useState(initialTaskList)

  const toggleCheck = (id: number) => {
    const nextTaskList = structuredClone(taskList)
    for (let task of nextTaskList) {
      if (task.id === id) {
        task.check = !task.check;
      }
    }
    setTaskList(nextTaskList)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <TaskList tasks={taskList} toggleFunc={toggleCheck} />
    </div>
  )
}

export default App
