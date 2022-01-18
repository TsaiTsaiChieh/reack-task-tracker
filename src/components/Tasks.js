import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
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
}

export default Tasks
