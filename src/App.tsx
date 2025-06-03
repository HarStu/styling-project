import { TaskList } from './TaskList.tsx'
import './Index.css'
import { useState } from 'react'



function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <TaskList />
    </div>
  )
}

export default App
