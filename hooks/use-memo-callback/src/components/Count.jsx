import React from 'react'
import Products from './Products';


const Count = () => {
  const [count, setCount] = React.useState(0);

  const slowFunction = () => {
    let acc = 0;
    for(let i = 0; i < 1000000; i++){
      acc +=i;
    }
    return acc;
  }

  const t1 = performance.now(); // tempo de execução até esse ponto
  const value = React.useMemo(()=> slowFunction(),[]);
  let time = performance.now()- t1 ; // tempo de execução até essep ponto menos timestamp

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>Resultado:{value}</p>
      <p>Tempo de Execução: {time}</p>
      <Products/>
    </div>
  )
}

export default Count