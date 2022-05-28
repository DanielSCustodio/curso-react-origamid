import React from 'react'
import Produtos from './Produtos'
import Home from './Home'
import Header from './components/Header'


const App = () => {
  let Pagina = Home;
  const { pathname } = window.location;

  if ( pathname === '/produtos' ) {
    Pagina = Produtos;
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  )
}

export default App