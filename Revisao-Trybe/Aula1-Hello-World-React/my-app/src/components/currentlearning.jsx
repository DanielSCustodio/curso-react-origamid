import React, {Component} from 'react';

export default class Currentlearning extends Component {
  render(){
    const currentlearning = (subject) => {
      return( <h2>Estou aprendendo {subject} </h2> );
    };
    return(
      <>
        { currentlearning('React') }
      </>
    );
  };
};