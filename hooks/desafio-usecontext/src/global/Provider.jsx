/* eslint-disable react/prop-types */

import React from 'react';
import ContextGlobal from './context';

const Provider = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [productTablet, setProductTablet] = React.useState(null);

  const requestApi = async () => {
    const responseRaw = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/',
    );
    const responseJson = await responseRaw.json();
    return responseJson;
  };

  React.useEffect(() => {
    const getResponse = async () => {
      const response = await requestApi();
      setData(await response);
    };
    getResponse();
  }, []);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
      .then((response) => response.json())
      .then((json) => setProductTablet(json));
  }, []);

  const clearData = () => {
    setData(null);
    setProductTablet(null);
  };

  let values = { data, setData, productTablet, setProductTablet, clearData };

  return (
    <ContextGlobal.Provider value={values}>{children}</ContextGlobal.Provider>
  );
};

export default Provider;
