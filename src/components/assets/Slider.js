import React from 'react'

const Slider = ({ onChange, disabled }) => {
  return (
    <div className='wrapper'>
      <form>
        <div className='slider-title'>Select Speed</div>
        <div className='speed-slider' onChange={onChange}>
          <input
            type='radio'
            name='speed'
            id='slow'
            value={80}
            disabled={disabled}
          />
          <label htmlFor='slow' current-speed='Slow'></label>
          <input
            type='radio'
            name='speed'
            id='medium'
            value={50}
            defaultChecked
            disabled={disabled}
          />
          <label htmlFor='medium' current-speed='Medium'></label>
          <input
            type='radio'
            name='speed'
            id='fast'
            value={5}
            disabled={disabled}
          />
          <label htmlFor='fast' current-speed='Fast'></label>
          <div className='slider-position'></div>
        </div>
      </form>
    </div>
  )
}

export default Slider
