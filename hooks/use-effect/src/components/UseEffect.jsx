import React from 'react';

function UseEffect () {
  const [ count, setCount ] = React.useState( 0 );
  const [ data, setData ] = React.useState( [] );

  React.useEffect( () => {
    console.log( 'Executou' );
  }, [] );

  React.useEffect( () => {
    document.title = `Você clicou ${ count } vezes`;
  }, [ count ] );

  React.useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
      .then( response => response.json()
        .then( ( json ) => setData( json ) ) )
  }, [] );
  return (
    <div>
      { data && (
        data.map( ( { id, name, username, email } ) => (
          <div key={ id } style={ { display: "flex" } }>
            <p>{ name }</p>
            <p>{ username }</p>
            <p>{ email }</p>
          </div>
        ) )

      ) }
      <button onClick={ () => setCount( count + 1 ) }>{ count }</button>
    </div>
  )
}

export default UseEffect