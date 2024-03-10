// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveias. Sendo elas:
// 1- Preço do combustível;
// 2- Gasto médio de combustíve do carro por KM;
// 3- Distância em KM da viagem;
// Imprima no console o valor que será gasto de combustível para realizar esta viagem


let precoCombustivel = 5.99;
let gastoMedioPorKM = 10.00;
let distanciaDaViagem = 55800;

let litrosConsumidos = distanciaDaViagem / gastoMedioPorKM;
let valorGasto = litrosConsumidos * precoCombustivel;


console.log('Seu carro vai gastar R$'+ valorGasto.toFixed(2) +' para realizar essa viagem');

