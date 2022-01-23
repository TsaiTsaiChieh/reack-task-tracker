import React, {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {BrowserRouter as Router, Route, Routes}   from 'react-router-dom'
import About from './components/About'

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

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  // Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id)
    const updateTask = {...taskToggle, reminder: !taskToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, 
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask)
      }
    )
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
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
    <Router>
      <div className="container">
        <Header 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />
        <Routes>
          <Route path="/" element={ 
            <>
              {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                :
                'no Tasks To show'}
            </>
          }
          />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
