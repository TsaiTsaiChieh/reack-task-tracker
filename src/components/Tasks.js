import React from 'react'
import PropTypes from 'prop-types'

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
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
