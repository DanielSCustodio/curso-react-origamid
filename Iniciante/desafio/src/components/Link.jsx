import React from 'react'

function Link ( { href, name } ) {
  return (
    <>
      <a href={ href }>{ name }</a>
    </>
  )
}

export default Link