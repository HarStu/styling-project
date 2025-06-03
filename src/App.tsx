import { useState } from 'react'
import clsx from 'clsx'
import './App.css'


type TaskData = {
  id: number,
  title: String
  description: String
  checked: Boolean
}

type TaskProps = {
  taskData: TaskData
}
function Task({taskData: {title, description, checked}}: TaskProps) {
  
  const baseBgStyle = "flex items-center pl-2 flex-row outline outline-gray-300 rounded-md w-100 py-3"
  const baseBtStyle = "flex outline outline-gray-300 w-5 h-5 mx-2 rounded-md"

  return (
    <div className={clsx(baseBgStyle, checked && " bg-bgGreen")}>
      <span className={clsx(baseBtStyle, checked && " bg-selectGreen")} />
      <span className="font-[Inter] font-light space-y-1 mx-1.5">
        <p className="text-s">{title}</p>
        <p className="text-gray-400 text-xs">{description}</p>
      </span>
    </div>
  )
}

function App() {
  const [checked, setChecked] = useState(true)

  const taskData = {
    id: 1,
    title: "Sweep the Kitchen",
    description: "Get under the cabinets, do a good job",
    checked: true 
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Task taskData={taskData} />
    </div>
  )
}

export default App
