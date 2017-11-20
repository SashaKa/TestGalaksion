import React from 'react'

const MoreButton = ({ method, name }) => {
  return (
    <button className="Button moreButton" onClick={method}>
      {name ? `Show me more ${name}'s!` : 'Show Me More!'}
    </button>
  )
}

export default MoreButton
