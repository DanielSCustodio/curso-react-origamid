import { Luana } from './util/data';

const Compras = () => {
  const dados = Luana;
  const total = dados.compras
    .map( ( item ) => Number( item.preco.replace( "R$", "" ) ) )
    .reduce( ( total, atual ) => total + atual, 0 );

  return (
    <>
      <p>Nome: { dados.cliente } </p>
      <p>Idade: { dados.idade } </p>
      <p>Total: { total } </p>
      <p>
        Situação: { " " }
        <span style={ { color: dados.ativa ? "green" : "red" } }>
          { dados.ativa ? "Ativa" : "Inativa" }
        </span>
      </p>
      { total > 10000 && <p>Tá gastando muito</p> }
    </>
  );
};

export default Compras;
