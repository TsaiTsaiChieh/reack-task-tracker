import React, {useState} from 'react'
// import PropTypes from 'prop-types'

const AddTask = () => {
  const [task, setTask] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
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
          onChange={(e)=> setReminder(e.currentTarget.checked)}/>
      </div>

      <input className="btn btn-block" type="submit" value='Save Task'/>
    </form>
  )
}

// AddTask.propTypes = {

// }

export default AddTask
