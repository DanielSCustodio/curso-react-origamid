import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      setError('Houve algum problema ao fazer a requisição');
      json = null;
    } finally {
      setData(json);
      setLoading(false);
      // eslint-disable-next-line no-unsafe-finally
      return { response };
    }
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
