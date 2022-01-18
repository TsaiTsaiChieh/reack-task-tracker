import React from 'react'
import PropTypes from 'prop-types'

function Button({color, text}) {
  return (
    <button className='btn' style={{'backgroundColor': color}}>{text}</button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  color: 'steelblue',
}
export default Button
