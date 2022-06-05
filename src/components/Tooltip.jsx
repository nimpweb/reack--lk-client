import React from 'react'

const Tooltip = ( { children } ) => {
  if (!children || !children.length) return;
  return (
    <div style="position: absolue">
      { children }
    </div>
  )
}

export default Tooltip