import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

Tasks.propTypes = {
  tasks: {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    reminder: PropTypes.bool.isRequired,
  },
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default Tasks
