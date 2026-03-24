/* Faca um programa para calcular o valor de uma viagem.

Voce ira ter 3 variaveis:
1 - Preco do combustivel
2 - Gasto medio do combustivel do carro por km 
3 - Distancia em km da viagem */

const prompt = require ("prompt-sync")();
const valorCombustivel = parseFloat(prompt("Digite o valor do combustível da sua cidade: "));
const kmPorLitros = parseFloat(prompt("Quantos km seu carro faz por cada L de gasolina?: "));
const distanciaEmKm = parseFloat(prompt("Quantos km irá percorrer?: "));

let valorConsumido = (distanciaEmKm / kmPorLitros) * valorCombustivel;

console.log(`Levando em consideração que o valor da gasolina é de R$${valorCombustivel}, o valor consumido
    é de R$${valorConsumido.toFixed(2)}`);
//OBS.: .toFixed e utilizado para arrendodar numeros quebrados. EX.: 2.456789 => .toFixed(2) = 2.45. 