import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function CardProduto({ produto }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`) // Não funcionou a função fetch
        .then((response) => response.json())
        .then((json) => setData(json));
    }
    setLoading(false);
  }, [produto]);

  if (data === null) return null;
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.preco}</p>
      {loading && <p>Carregando...</p>}
    </div>
  );
}

export default CardProduto;
