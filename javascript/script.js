import { areQuadradro, perimetroQuadrado } from './quadradro.js'
import numeroAleatorio from './numeroAleatorio.js';
import requestApi from './requestApi.js';

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
showList('Mannobra', 'Israel', 'Daniel', 'Fulano');

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

console.log('Area Quadrada =>',areQuadradro(5)); // funcção importada
console.log('Perimetro Quadrado =>',perimetroQuadrado(5)); // funcção importada
console.log('Numero Aleatorio =>',numeroAleatorio(1, 20 )); // funcção importada
requestApi(); // uso de Fetch

const precos  = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a apagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
]

const precosFiltros = precos.filter(p => p.includes('R$'));
console.log(precosFiltros);

const precosNumeros = precosFiltros.map(p => Number(p.replace('R$', '')));
console.log(precosNumeros);

const playerOne = 10;
const playerTwo = 20;
const vencedor = playerOne > playerTwo ? 'PlayerOne Venceu' : 'PlayerTwo Venceu'; //operador ternario
console.log(vencedor);

const active = true;
const button = active && 'Botão ativo'; //operador &&
console.log(button);