import React from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');

  React.useEffect(()=>{
    localStorage.setItem('name', 'Daniel');
    const nameLocal = localStorage.getItem('name')
    setName(nameLocal)
  }, [])

  const subtraction = () => {
    setCount(count => count - 1)
  }

  let values = {
    count,
    setCount,
    name,
    subtraction
  }
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;