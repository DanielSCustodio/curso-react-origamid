import React from 'react'

const Input = ( { id, label, type, ...props } ) => {
  return (
    <div>
      <label htmlFor={ id }>{ label } </label>
      <input id={ id } type={ type } { ...props }></input>

    </div>
  )
}

export default Input