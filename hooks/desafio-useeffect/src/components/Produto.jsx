import React from 'react';
import CardProduto from './CardProduto';

function Produto() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoAtual = localStorage.getItem('produto');
    if (produtoAtual !== null) setProduto(produtoAtual);
  }, []);

  React.useEffect(() => {
    if (produto !== null) localStorage.setItem('produto', produto);
  }, [produto]);

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button type="button" onClick={handleClick}>
        smartphone
      </button>
      <button type="button" onClick={handleClick}>
        notebook
      </button>

      <CardProduto produto={produto} />
    </div>
  );
}

export default Produto;
