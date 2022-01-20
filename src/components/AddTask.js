import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddTask = ({onAdd}) => {
  const [task, setTask] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!task) return alert('Please add a task')
    onAdd({task, day, reminder})
    setTask('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type="text" 
          value={task} 
          placeholder='Add Task' 
          onChange={(e) => setTask(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type="text" 
          value={day} 
          placeholder='Add Day & Time'
          onChange={(e)=> setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input 
          type="checkbox" 
          value={reminder}
          checked={reminder}
          onChange={(e)=> setReminder(e.currentTarget.checked)}/>
      </div>

      <input className="btn btn-block" type="submit" value='Save Task'/>
    </form>
  )
}

AddTask.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default AddTask
