/* Faca um programa para calcular o valor de uma viagem.

Voce ira ter 3 variaveis:
1 - Preco do combustivel
2 - Gasto medio do combustivel do carro por km 
3 - Distancia em km da viagem */

const prompt = require ("prompt-sync")();
const valorCombustivel = Number(prompt("Digite o valor do combustível da sua cidade: "));
const kmPorLitros = Number(prompt("Quantos km seu carro faz por cada L de gasolina?: "));
const distanciaEmKm = Number(prompt("Quantos km irá percorrer?: "));

let valorConsumido = (distanciaEmKm / kmPorLitros) * valorCombustivel;

console.log(`Levando em consideração que o valor da gasolina é de R$${valorCombustivel}, o valor consumido
    é de R$${valorConsumido.toFixed(2)}`);