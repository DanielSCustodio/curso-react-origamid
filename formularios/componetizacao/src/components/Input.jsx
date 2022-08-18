/* eslint-disable react/prop-types */
import React from 'react';

const Input = ({ label, id, setValue, ...props }) => {
  //...props passa todos os campos que chave e valor são iguais, ex value={value}
  return (
    <>
      <label htmlFor={id}> {label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
