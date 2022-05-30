import React from 'react'
import CarProdutos from '../template/CarProdutos';
import fetchtApi from '../util/fetchApi';

function TemplateProdutos () {
  const [ data, setData ] = React.useState( null )
  const [ loading, setLoading ] = React.useState( null )


  const handleClick = async ( event ) => {
    setLoading( true );
    const response = await fetchtApi( event.target.innerText );
    setData( response );
    setLoading( false );
  }

  return (
    <section>
      <button onClick={ handleClick }>notebook</button>
      <button onClick={ handleClick }>smartphone</button>
      <button onClick={ handleClick }>tablet</button>
      { loading && <p>Carregando...</p> }
      { !loading && data && <CarProdutos data={ data } /> }
    </section>

  )
}

export default TemplateProdutos