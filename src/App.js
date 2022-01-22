import React, {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', 
      {
        method: 'POST', 
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        :
        'no Tasks To show'}
    </div>
  )
}

export default App
