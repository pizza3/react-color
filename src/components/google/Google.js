import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import merge from 'lodash/merge'

import { ColorWrap, Saturation, Hue } from '../common'
import GooglePointerCircle from './GooglePointerCircle'
import GooglePointer from './GooglePointer'
import GoogleFields from './GoogleFields'

export const Google = ({ width, onChange, rgb, hsl, hsv, hex,
  styles: passedStyles = {}, className = '', defaultView }) => {
  const styles = reactCSS(merge({
    'default': {
      picker: {
        width,
        background: '#fff',
        borderRadius: '2px',
        border: '1px solid #dfe1e5',
        boxSizing: 'initial',
        fontFamily: 'Menlo',
        display: 'flex',
        flexWrap: 'wrap',
      },
      saturation: {
        width: '70%',
        padding: '0px',
        position: 'relative',
        borderRadius: '0 2px 0 0',
        overflow: 'hidden',
      },
      Saturation: {
        radius: '0 2px 0 0',
      },
      swatch: {
        width: '30%',
        height: '228px',
        padding: '0px',
        background: `rgba(${ rgb.r }, ${ rgb.g }, ${ rgb.b }, 1)`,
        position: 'relative',
        borderRadius: '2px 0 0 0',
        overflow: 'hidden',
      },
      body: {
        margin: 'auto',
        width: '95%',
      },
      controls: {
        display: 'flex',
        boxSizing: 'border-box',
        height: '52px',
        paddingTop: '22px',
      },
      color: {
        width: '32px',
      },
      hue: {
        height: '8px',
        position: 'relative',
        margin: '0px 16px 0px 16px',
        width: '100%',
      },
      Hue: {
        radius: '2px',
      },
    },
  }, passedStyles))
  return (
    <div style={ styles.picker } className={ `google-picker ${ className }` }>
      <div style={ styles.swatch } />
      <div style={ styles.saturation }>
        <Saturation
          style={ styles.Saturation }
          hsl={ hsl }
          hsv={ hsv }
          pointer={ GooglePointerCircle }
          onChange={ onChange }
        />
      </div>
      <div style={ styles.body }>
        <div style={ styles.controls } className="flexbox-fix">
          <div style={ styles.hue }>
            <Hue
              style={ styles.Hue }
              hsl={ hsl }
              radius="4px"
              pointer={ GooglePointer }
              onChange={ onChange }
            />
          </div>
        </div>
        <GoogleFields
          rgb={ rgb }
          hsl={ hsl }
          hex={ hex }
          hsv={ hsv }
          onChange={ onChange }
        />
      </div>
    </div>
  )
}

Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf([
    "hex",
    "rgb",
    "hsl",
  ]),
}

Google.defaultProps = {
  width: 652,
  styles: {},
}

export default ColorWrap(Google)
