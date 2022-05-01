import React, {Component} from 'react';

class HelloWorld extends Component {
  render(){
    const element = ( //criação de elementos HTML
      <h1 className="hello-world">Hello, Mundico!</h1>  
    );
    return(
      <>
        {element}
      </>
    );
  }
}

export default HelloWorld;