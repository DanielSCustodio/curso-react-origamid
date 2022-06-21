import React from 'react'
import Products from './components/Products';
import UserProvider from './Context/UserProvider';

const App = () => {
  return (
    <section>
      <UserProvider>
        <Products/>
      </UserProvider>
    </section>
  )
}

export default App;
