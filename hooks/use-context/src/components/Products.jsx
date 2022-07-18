import React from 'react';
import userContext from '../Context/UserContext'; // Contexto nos componentes

const Products = () => {
  const { name, count, setCount, subtraction } = React.useContext(userContext);
  return (
    <>
      <p>{ name }</p>
      <p>Contador: { count }</p>
      <button onClick = {() => setCount((previous) => previous + 1)}>Incrementar 1 ao contador</button>
      <button onClick = {subtraction}>Decrementar 1 ao contador</button>
    </>
  )
}

export default Products