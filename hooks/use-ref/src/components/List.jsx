import React from 'react'

const List = () => {
  const [ items, setItems ] = React.useState( [] );
  const [ value, setValue ] = React.useState( '' );
  const inputElement = React.useRef();

  const handleClick = () => {
    setItems( [ ...items, value ] );
    setValue( '' );
    inputElement.current.focus();
    console.log( items );
  }
  return (
    <div>
      <ul>
        { items.map( ( item ) => (
          <li key={ item }>{ item }</li>
        ) ) }
      </ul>
      <input
        type="text"
        value={ value }
        onChange={ ( event ) => setValue( event.target.value ) }
        ref={ inputElement }
      />
      <button onClick={ handleClick }> Adicionar</button>
    </div>
  )
}

export default List;