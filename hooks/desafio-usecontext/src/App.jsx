import React from 'react';
import Provider from '../src/global/Provider';
import Generic from './component/Generic';

const App = () => {
  return (
    <Provider>
      <div>
        <Generic />
      </div>
    </Provider>
  );
};

export default App;
