import { produtos } from "./util/data";

const Produtos = () => {
  const dados = produtos
    .filter( ( { preco } ) => Number( preco.replace( 'R$ ', '' ) ) >= 2000 )

  return (
    <section>
      { dados.map( ( { id, nome, preco, cores } ) => (
        <div key={ id }>
          <h1>{ nome }</h1>
          <p>Preço:{ preco }</p>
          <div key={ id }>
            { cores.map( ( item ) => (
              <div key={ item } style={ { backgroundColor: item, color: 'white' } }>{ item }</div>
            ) ) }
          </div>
        </div>
      ) ) }
    </section>
  );
}

export default Produtos;