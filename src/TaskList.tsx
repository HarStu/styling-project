import { useState } from 'react'
import clsx from 'clsx'
import './index.css'

import { Task } from './Task.tsx'
import type { TaskData } from './Task.tsx'

type TaskListProps = { 
  tasks: TaskData[] 
  toggleFunc: Function
}
export function TaskList({ tasks, toggleFunc } : TaskListProps) {
  const completedCompare = (a: TaskData, b: TaskData) => {
    if (a.check && !b.check) {
      return 1
    } else if (!a.check && b.check) {
      return -1
    } else {
      return 0
    }
  }

  const sortedTasks = tasks.sort(completedCompare)

  return (
    <div className="space-y-4">
      {sortedTasks.map(taskData =>
        <Task taskData={taskData} toggleFunc={() => toggleFunc(taskData.id)} />
      )}
    </div>
  )
}