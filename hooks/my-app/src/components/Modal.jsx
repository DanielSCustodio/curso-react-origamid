import React from 'react'

function Modal ( { modal } ) {
  if ( modal )
    return (
      <div>
        <section style={ { padding: "10rem", backgroundColor: "green", marginTop: "5rem" } }>
          { modal ? 'Modal aberto' : 'Modal fechado' }
        </section>
      </div>
    )
}

export default Modal