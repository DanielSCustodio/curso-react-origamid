import React, {Component} from 'react';
import './App.css';
import SerieList from './components/SerieList';


export default class App extends Component {
  render(){
    return(
      <section className='App'>
        <h1>Séries</h1>
        <SerieList/>
      </section>
    )
  }
}
