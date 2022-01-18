import React from 'react'
import PropTypes from 'prop-types'

function Button({color, text, onClick}) {
  return (
    <button className='btn'
      onClick={onClick}
      style={{'backgroundColor': color}}>
      {text}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  color: 'steelblue',
}
export default Button
