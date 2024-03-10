//Faça um progama para calcular o valor de uma viagem.

//Você terá 5 varáveis. Sendo elas:

//1- Preço do etanol;
//2- Preço da gasolina;
//3- O tipo de combustível que está no seu carro;
//4- Gasto médio de combustivel do carro por KM;
//5- Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoEtanol = 5.79;
let precoGasolina = 6.66;

let kMPorLitros = 10.00;
let distanciaEmKm = 100;
let tipoCombustivel = 'Etanol';

let litrosConsumidos = distanciaEmKm / kMPorLitros;

let valorGasto;

if (tipoCombustivel === 'Etanol') {
valorGasto = litrosConsumidos * precoEtanol;

} 
else  
valorGasto = litrosConsumidos * precoGasolina;
console.log(valorGasto.toFixed(2)); {
}


