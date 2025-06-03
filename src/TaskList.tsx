import { useState } from 'react'
import './index.css'

import { Task } from './Task.tsx'
import type { TaskData } from './Task.tsx'

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

export function TaskList() {
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

  const completedCompare = (a: TaskData, b: TaskData) => {
    if (a.check && !b.check) {
      return 1
    } else if (!a.check && b.check) {
      return -1
    } else {
      return 0
    }
  }

  const sortedTasks = taskList.sort(completedCompare)

  return (
    <div className="space-y-4">
      {sortedTasks.map(taskData =>
        <Task key={taskData.id} taskData={taskData} toggleFunc={() => toggleCheck(taskData.id)} />
      )}
    </div>
  )
}