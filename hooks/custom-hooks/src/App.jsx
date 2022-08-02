import React from 'react';
import useFetch from './hooks/UseFetch';
import useLocalStorage from './hooks/UseLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();
  const [statusCode, setStatusCode] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const { response } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      setStatusCode(response.status);
    };
    fetchData();
  }, [request]);

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };
  if (error) return <p>{error}</p>;
  return (
    <div>
      <p>Produto no localStorage: {product}</p>
      <button onClick={handleClick}>Carro</button>
      <button onClick={handleClick}>Moto</button>
      <p>Status Code: {statusCode}</p>
      {loading && !data && <p>Carregando...</p>}
      {data &&
        data.map(({ id, nome }) => (
          <div key={id}>
            {' '}
            <h5>{nome}</h5>
          </div>
        ))}
    </div>
  );
};

export default App;
