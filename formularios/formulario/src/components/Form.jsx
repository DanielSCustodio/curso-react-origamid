import React from 'react'
import CheckBox from './CheckBox';


const formFields = [
{
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];


const Form = () => {
  const[textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [cor, setCord] = React.useState(false)
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]:'',
      }
    }, {})
  );
  const [response, setResponse] = React.useState(null);

  const handleChange = ({ target}) => {
    const {id, value} = target;
    setForm({...form, [id]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response)
    });
  }

  return (
      <form onSubmit ={handleSubmit}>
        {formFields.map(({id, label, type}) =>(
          <section key={id}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={ form[id] } onChange={ handleChange } />
          </section>
        ))}
        <textarea value={textarea} cols="20" rows="5" onChange={({target}) => setTextarea(target.value)}/>
        <br/>
        <select 
          id = "produtos"
          value={select}
          onChange={({target}) => setSelect(target.value)}>
          <option value="" disabled>Selecione</option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <br/>
        <label>
          <input type="radio" name="sexo" value="masculino" onChange={({target}) => setRadio(target.value)}/>
          Masculino
        </label>
        <label>
          <input type="radio" name="sexo" value="feminino" onChange={({target}) => setRadio(target.value)}/>
          Feminino
        </label>
        <br/>
        <label>
          <input type="checkbox"
            value="checkbox" 
            checked={checkbox} 
            onChange={({target}) => setCheckbox(target.checked)}
          />
          Fingi que li os termos
        </label>
        <CheckBox/>
        {response && response.ok && <p>Enviado com sucesso</p>}
        {checkbox && <h2>Vendeu sua alma</h2>}
        <br/>
        <button>Enviar</button>
      </form>
  )
}

export default Form