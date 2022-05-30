import React from 'react'

function Contador () {
  const [ contador, setContador ] = React.useState( 1 );
  const [ items, setItems ] = React.useState( [ 'Item 1' ] );

  const handleClick = () => {
    setContador( contador + 1 );
    setItems( [ ...items, 'Item' + ( contador + 1 ) ] );
  };
  return (
    <div>
      <button onClick={ handleClick } style={ { padding: "20px" } }>
        { contador }
      </button>
      { items.map( ( item ) => (
        <li key={ item }>{ item }</li>
      ) ) }

    </div>
  )
}

export default Contador