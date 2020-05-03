import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'
import tinycolor from 'tinycolor2'

import { EditableInput } from '../common'

export const GoogleFields = ({ onChange, rgb, hsl, hex, hsv, disableAlpha }) => {

  const styles = reactCSS({
    'default': {
      fields: {
        display: 'flex',
        height: '100px',
        marginTop: '4px',
      },
      single: {
        flex: '1',
        paddingLeft: '6px',
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px',
      },
      double: {
        width: '100%',
      },
      column: {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      input: {
        width: '100%',
        height: '38px',
        boxSizing: 'border-box',
        padding: '4px 10% 3px',
        textAlign: 'center',
        border: '1px solid #dadce0',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
      },
      input2: {
        height: '38px',
        width: '100%',
        border: '1px solid #dadce0',
        boxSizing: 'border-box',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '10px',
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '35px',
        top: '-6px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      label2: {
        left: '9px',
        display: 'block',
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '32px',
        top: '-6px',
      },
      inputParent: {
        flexGrow: '1',
        margin: '0px 4.4px',
      },
    },
    'disableAlpha': {
      alpha: {
        display: 'none',
      },
    },
  }, { disableAlpha })

  const handleChange = (data, e) => {
    if (data.hex) {      
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex',
      }, e)
    } else if (data.rgb) {
      const rgbValue = data.rgb.split(',')      
      rgbValue.length === 3 && tinycolor(`rgb (${ data.rgb })`)._ok && onChange({
        r: rgbValue[0] || rgb.r,
        g: rgbValue[1] || rgb.g,
        b: rgbValue[2] || rgb.b,
        a: 1,
        source: 'rgb',
      }, e)
    } else if (data.hsv){
      const hsvValue = data.hsv.split(',')
      
      const removedDegree = data.hsv.replace('°', '')
      
      if ( tinycolor(`hsv (${ removedDegree })`)._ok ){
        if (typeof(hsvValue[2]) === 'string' && hsvValue[2].includes('%')) {
          hsvValue[2] = hsvValue[2].replace('%', '')
        }
        if (typeof(hsvValue[1]) === 'string' && hsvValue[1].includes('%')) {
          hsvValue[1] = hsvValue[1].replace('%', '') 
        }
        if (typeof(hsvValue[0]) === 'string' && hsvValue[0].includes('°')) {
          hsvValue[0] = hsvValue[0].replace('°', '') 
        }
        
        
        onChange({
          h: Number(hsvValue[0]) || hsv.h,
          s: Number(hsvValue[1]) || hsv.s,
          v: Number(hsvValue[2]) || hsv.v,
          source: 'hsv',
        }, e)
      }
    } else {
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        source: 'hsl',
      }, e)
    }
  }

  // eslint-disable-next-line no-invalid-this
  const rgbValue = `${ rgb.r }, ${ rgb.g }, ${ rgb.b }`    
  const hslValue = `${ Math.round(hsl.h) }°, ${ Math.round(hsl.s * 100) }%, ${ Math.round(hsl.l * 100) }%`
  const hsvValue = `${ Math.round(hsv.h) }°, ${ Math.round(hsv.s * 100) }%, ${ Math.round(hsv.v * 100) }%`

  return (
    <div style={ styles.fields } className="flexbox-fix">
      <div style={ styles.double }>
        <EditableInput
          style={{ input: styles.input, label: styles.label }}
          label="hex"
          value={ hex }
          onChange={ handleChange }
        />
        <div style={ styles.column }>
          <div style={ styles.inputParent }>
            <EditableInput
              style={{ input: styles.input2, label: styles.label2 }}
              label="rgb"
              value={ rgbValue }
              onChange={ handleChange }  
              type="string"
            />
          </div>
          <div style={ styles.inputParent }>
            <EditableInput
              style={{ input: styles.input2, label: styles.label2 }}
              label="hsv"
              value={ hsvValue }
              onChange={ handleChange }
              type="string"
            />
          </div>
          <div style={ styles.inputParent }>
            <EditableInput
              style={{ input: styles.input2, label: styles.label2 }}
              label="hsl"
              value={ hslValue }
              onChange={ handleChange }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleFields
