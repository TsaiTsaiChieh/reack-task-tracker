import React from 'react'
import PropTypes from 'prop-types'

const Task = ({task}) => {
  return (
    <div className='task'>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
  task: {
    text: PropTypes.string,
    day: PropTypes.string,
  },
}

export default Task

