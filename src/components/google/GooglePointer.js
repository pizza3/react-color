import React from 'react'
import reactCSS from 'reactcss'

export const GooglePointer = (props) => {    
  const styles = reactCSS({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        transform: 'translate(-10px, -7px)',
        background: `hsl(${ Math.round(props.hsl.h) }, 100%, 50%)`,
        border: '2px white solid',
      },
    },
  })

  return (
    <div style={ styles.picker } />
  )
}

export default GooglePointer
