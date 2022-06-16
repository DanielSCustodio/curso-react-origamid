import React from 'react'

const Products = () => {
  //Set() não aceita valores repetidos
  const set1 = new Set(); 
  const set2 = new Set();

  const func1 = () =>{
    console.log('Televisão');
  }

  const func2 = React.useCallback(() => {
    console.log('Geladeira');
  },[])

  set1.add(func1);
  set2.add(func2);

  console.log('SET 1 =>',set1);
  console.log('Set 2 =>', set2);

  return (
    <div>
      <p onClick={func1}>Televisão</p>
      <p onClick={func2}>Geladeira</p>
    </div>
  )
} 

export default Products