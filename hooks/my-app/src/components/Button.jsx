import React from 'react'

function Button () {
  const [ ativo, setAtivo ] = React.useState( true );
  const [ dados, setDados ] = React.useState( { nome: "jhony", idade: 20 } );

  const handleClick = () => {
    setAtivo( !ativo );
    setDados( { ...dados, faculdade: 'sim' } );
    ativo ? setDados( { ...dados, faculdade: 'sim' } ) : setDados( { ...dados, faculdade: 'não' } );
  }

  return (
    <div>
      <p>{ dados.nome }</p>
      <p>{ dados.idade }</p>
      <p>{ dados.faculdade }</p>
      <button onClick={ handleClick }>
        { ativo ? 'Desativar' : 'Ativar' }
      </button>
    </div>
  )
}

export default Button