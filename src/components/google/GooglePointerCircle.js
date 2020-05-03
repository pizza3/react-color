import React from 'react'
import reactCSS from 'reactcss'

export const GooglePointerCircle = (props) => {
  const styles = reactCSS({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        border: '2px #fff solid',
        transform: 'translate(-12px, -13px)',
        background: `hsl(${ Math.round(props.hsl.h) }, ${ Math.round(props.hsl.s * 100 ) }%, ${ Math.round(props.hsl.l * 100) }%)`,
      },
    },
  })

  return (
    <div style={ styles.picker } />
  )
}

export default GooglePointerCircle
