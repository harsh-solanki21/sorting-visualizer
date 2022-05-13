import React from 'react'

const Button = ({ type, name, onClick, disabled }) => {
  return (
    <button
      className={type === 'SORT' ? 'button sort' : 'button newArray'}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
