import React, {Component} from 'react';

export default class Array extends Component {
  render(){
    const nomes = ['Batman', 'Lex Luthor', 'Constantine', 'Adão Negro']
    return(
    <>
      { nomes.map((nome) => <h2 key={nome}>{nome}</h2>)}
    </>
    );
  }
}