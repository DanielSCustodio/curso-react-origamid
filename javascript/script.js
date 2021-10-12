//Destruturação de array
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

const useQuadrado =[
  4,
  function(lado){
    return 4 * lado;
  }
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(25));

//Rest 

function showList (empresa, ...clientes){ //Permite que o tamanho do array não precise ser definido
  clientes.forEach((cliente)  => {
    console.log(cliente, empresa);
  });
}
showList('Aond', 'Israel', 'Daniel', 'Fulano');

//Spread
const values = [15, 23, 56, 23]
const numbers = [...values, 10,  5,  21]; //Espalhando os valores do array no novo array
const maior = Math.max(...numbers); //Espalhando os valores do array como argumentos
console.log(maior);

//Spread em objeto

const car ={
  color:'Black',
  door:'4'
}

const  carAge ={
  ...car,
  age:2021,
}

console.log(carAge);