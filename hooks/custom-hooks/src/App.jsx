import React from 'react';
import useLocalStorage from './hooks/UseLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };

  return (
    <div>
      <p>Produto no localStorage: {product}</p>
      <button onClick={handleClick}>Carro</button>
      <button onClick={handleClick}>Moto</button>
    </div>
  );
};

export default App;
