import React from 'react'

function ButtonModal ( { setModal, modal } ) {
  const [ ativo, setAtivo ] = React.useState( true );

  const handleClick = () => {
    setAtivo( !ativo );
    setModal( !modal );
  }
  return (
    <button onClick={ handleClick } style={ { position: "fixed", left: "2%", top: "30%" } }>{ ativo ? 'Abrir Modal' : 'Fechar Modal' }</button>
  )
}

export default ButtonModal