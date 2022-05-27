import { Mario } from './util/data';
function Arrays () {

  const nomes = ["Luana", "Mario", "João"];

  const livros = [
    { titulo: "O Senhor dos Anéis", preco: 100 },
    { titulo: "O Hobbit", preco: 200 },
    { titulo: "O Senhor dos Anéis", preco: 300 },
    { titulo: "Os Maias", preco: 400 },
  ];

  const total = Mario.compras
    .map((item) => Number(item.preco.replace("R$", "")))
    .reduce((total, atual) => total + atual, 0);

  const response = [Mario].map((item)=>(
    <section>
      <p>Nome: { item.cliente }</p>
      <p>Idade: { item.idade}</p>
      <p>Total: { total }</p>
      <p>Situação:{' '}
        <span style={{ color: item.ativa ? "green" : "red" }}>
          { item.ativa ? "Ativa" : "Inativa" }
        </span>  
      </p>
      <p>{total > 10000 && <p>Tá gastando muito</p> } </p>
    </section>
  ));

  return ( 
    <>
      {response}
      <ul>
        {nomes.map((nome) => (
          <li key={nome}>{nome}</li>
        ))}
      </ul>
      <ul> 
      { livros
        .filter(({preco})=> preco >= 200)
        .map(({titulo, preco}) => (
          <li key={titulo}>{titulo} =={'>'} {preco}</li>
        ))
      }
      </ul>
    </>
  );
}

export default Arrays ;
