import React from 'react'

function ButtonModal ( { setModal } ) {
  const [ ativo, setAtivo ] = React.useState( true );

  const handleClick = () => {
    setAtivo( !ativo );
    setModal( ( modal ) => !modal ); //Elimina a necessidade de passar modal como props
  }
  return (
    <button onClick={ handleClick } style={ { position: "fixed", left: "2%", top: "45%" } }>
      { ativo ? 'Abrir Modal' : 'Fechar Modal' }
    </button>
  )
}

export default ButtonModal