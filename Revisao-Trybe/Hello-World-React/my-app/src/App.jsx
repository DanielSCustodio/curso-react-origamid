import './App.css';
import React, {Component} from 'react';
import HelloWorld from './components/hello-world';
import Currentlearning from './components/currentlearning';
import Array from './components/array';

class App extends Component{
  render(){
    return (
      <main>
        <HelloWorld/>
        <Currentlearning/>
        <Array/>
      </main>
    );
  }
}

export default App;
