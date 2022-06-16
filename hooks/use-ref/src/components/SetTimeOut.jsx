import React from 'react';

const SetTimeOut = () => {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null)
  const timeoutRef = React.useRef();

  const handleClick = ()=> {
    setCart( cart + 1);
    setNotification('Um item adicioando ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null)
    }, 2000)
  }

  return (
    <div>
      <button onClick={handleClick}>Comprar</button>
      <p>{notification}</p>
      <p>Total de itens: {cart}</p>
    </div>
  )
}

export default SetTimeOut