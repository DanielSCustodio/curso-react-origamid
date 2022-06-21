import React from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
  const [count, setCount] = React.useState(0);

  const { name } = JSON.parse(localStorage.getItem('user'));

  let values = {
    count,
    setCount,
    name,
  }
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;