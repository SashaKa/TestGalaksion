import React from 'react'

const ReverseButton = ({ isToggleOn, method }) => (
  <button className="Button" onClick={method}>
    {isToggleOn ? 'Sort of A-Z' : 'Sort of Z-A'}
  </button>
)

export default ReverseButton
