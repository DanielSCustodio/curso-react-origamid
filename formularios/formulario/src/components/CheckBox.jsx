import React from 'react'

const CheckBox = () => {
  const [colores, setColores] = React.useState(['azul', 'vermelho']);

  const handleChange =({target})=> {
      if(target.checked){
        setColores([...colores, target.value])
      }else{
        setColores(colores.filter((color)=> color !== target.value))
      }
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={colores.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={colores.includes("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={colores.includes("verde")}
          onChange={handleChange}
        />
        Verde
      </label>
    </div>
  )
}

export default CheckBox