import { useState } from 'react'
import clsx from 'clsx'
import './index.css'

import { Task } from './Task.tsx'
import type { TaskData } from './Task.tsx'

type TaskListProps = { tasks: TaskData[] }
export function TaskList({ tasks } : TaskListProps) {
  const completedCompare = (a: TaskData, b: TaskData) => {
    if (a.initialCheck && !b.initialCheck) {
      return 1
    } else if (!a.initialCheck && b.initialCheck) {
      return -1
    } else {
      return 0
    }
  }

  const sortedTasks = tasks.sort(completedCompare)

  return (
    <div className="space-y-4">
      {sortedTasks.map(taskData =>
        <Task taskData={taskData} />
      )}
    </div>
  )
}