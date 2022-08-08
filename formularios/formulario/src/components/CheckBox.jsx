import React from 'react'

const colorsArray = ['Azul', 'Vermelho', 'Verde', 'Laranja', 'Roxo'];

const CheckBox = () => {
  const [colors, setColors] = React.useState(['Azul', 'Vermelho']);

  const handleChange =({target})=> {
      if(target.checked){
        setColors([...colors, target.value])
      }else{
        setColors(colors.filter((color)=> color !== target.value))
      }
  }

  return (
    <div>
      {colorsArray.map((color) =>(
        <label>
          <input
            type="checkbox"
            value={color}
            checked={colors.includes(color)}
            onChange={handleChange}
          />
          {color.toLocaleUpperCase()}
      </label>
      ))}

    </div>
  )
}

export default CheckBox