import { useState } from "react"
import Header from "./components/Header"
import './App.scss'
import Tasks from "./components/Tasks"
import Add from "./components/Add"


const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'feb 25th 2022',
        
    },
    {
        id: 2,
        text: 'Meetings at school',
        day: 'feb 5th 2021',
        
    },
    {
        id: 3,
        text: 'food shopping',
        day: 'feb 15th 2012',
       
    },
])
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const add = (task) => {
   const id = Math.floor(Math.random() *
    1000) + 1 
   const newTask = { id, ...task }
   setTasks([...tasks, newTask])
}
  return (
    <div className="container">
    <Header  onAdd={() => setShowAddTask(!showAddTask)}/>
    {showAddTask && <Add onAdd={add} />}
    {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} />
     ) : (
      'No Tasks to show'
      )}
    </div>
  )
}  
export default App;
