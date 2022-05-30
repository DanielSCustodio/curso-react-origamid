import React from 'react'

function CarProdutos ( { data } ) {
  return (
    <div>
      <h1>{ data.nome }</h1>
      <p>{ data.descricao }</p>
      { data.fotos.map( ( { src, titulo } ) => (
        <img key={ titulo } src={ src } alt={ titulo } />
      ) ) }
    </div>
  )
}

export default CarProdutos