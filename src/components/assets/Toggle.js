import React from 'react'

const Toggle = ({ context, soundState, onChange, disabled }) => {
  return (
    <div className='toggle'>
      <span className='context'>{context}</span>
      <div onChange={onChange}>
        <label className='toggle-switch'>
          <input type='checkbox' disabled={disabled} defaultChecked />
          <span className='slider round'></span>
        </label>
        <span className='sound-state'>{soundState}</span>
      </div>
    </div>
  )
}

export default Toggle
