import React from 'react';
import Title from './components/Title';
import { produtos } from './util/data';
import ListProdutos from './components/ListProdutos';
function Produtos () {

  return (
    <div>
      <Title texto="Produtos" cor="red" />
      { produtos.map( ( produto ) => (
        <ListProdutos key={ produtos.nome } { ...produto } />
      ) ) }
    </div>
  );
}

export default Produtos;
