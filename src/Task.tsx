import { useState } from 'react'
import clsx from 'clsx'
import './index.css'


export type TaskData = {
  id: number,
  title: String
  description: String
  initialCheck: Boolean
}

type TaskProps = {
  taskData: TaskData
}
export function Task({taskData: {title, description, initialCheck}}: TaskProps) {
  const [check, setCheck] = useState(initialCheck)

  const toggleCheck = () => setCheck(!check);
  
  const baseBgStyle = "flex items-center pl-2 flex-row outline outline-gray-300 rounded-md w-100 py-3"
  const baseBtStyle = "flex outline outline-gray-300 w-5 h-5 mx-2 rounded-md"

  return (
    <div className={clsx(baseBgStyle, check && " bg-bgGreen")}>
      <span onClick={toggleCheck} className={clsx(baseBtStyle, check && " bg-selectGreen")} />
      <span className="font-[Inter] font-light space-y-1 mx-1.5">
        <p className="text-s">{title}</p>
        <p className="text-gray-400 text-xs">{description}</p>
      </span>
    </div>
  )
}