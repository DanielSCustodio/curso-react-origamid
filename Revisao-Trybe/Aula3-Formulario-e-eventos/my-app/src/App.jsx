import React, {Component} from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

export default class App extends Component {
  render(){
    return(
      <main className="App">
        <LoginForm/>
        <RegisterForm/>
      </main>
    );
  }
}


