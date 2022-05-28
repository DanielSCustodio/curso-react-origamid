import React from 'react'

function Title ( { texto, cor } ) {
  return (
    <h1 style={ { color: cor } }>{ texto }</h1>
  )
}

export default Title