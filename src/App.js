import React, {useState} from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  // Add Task
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random()* 10000) + 1
    const newTask = {id, ...task}
    console.log(task)
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <AddTask onAdd={addTask}/>
      <Header />
      {tasks.length ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        :
        'no Tasks To show'}
    </div>
  )
}

export default App
