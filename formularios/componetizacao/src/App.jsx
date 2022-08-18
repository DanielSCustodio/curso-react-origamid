import React from 'react';
import './App.css';
import Input from './components/Input';
import Select from './components/Select';

const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [product, setProduct] = React.useState('');
  return (
    <div>
      <form>
        <Select
          options={['Jeep Compass', 'Yamaha R3', 'HB20']}
          value={product}
          setValue={setProduct}
        />
        <Input label="Nome" id="nome" value={name} setValue={setName} />
        <Input
          label="Email"
          id="email"
          value={email}
          setValue={setEmail}
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default App;
