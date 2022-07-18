import React from 'react';
import ContextGlobal from '../global/context';
const Generic = () => {
  const { data, productTablet, clearData } = React.useContext(ContextGlobal);

  return (
    <section>
      {productTablet && productTablet.descricao}

      {data &&
        data.map(({ id, nome }) => (
          <div key={id}>
            <h1>{nome}</h1>
          </div>
        ))}
      <button onClick={clearData}>Limpar</button>
    </section>
  );
};

export default Generic;
