import React from 'react'

function ListProdutos ( { nome, propriedades } ) {
  return (
    <div style={ { border: "1px solid black" } }>
      <h2>{ nome }</h2>
      <ul>
        { propriedades.map( ( item ) => (
          <li key={ item }>{ item }</li>
        ) ) }
      </ul>
    </div >
  )
}

export default ListProdutos