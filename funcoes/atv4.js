const prompt = require ("prompt-sync")();

function somaDosNumeros (valor1, valor2){
    return valor1 + valor2;
}

const valor1 = Number(prompt("Digite o 1º número: "));
const valor2 = Number(prompt("Digite o 2º número: "));

console.log("Soma:", somaDosNumeros(valor1, valor2));

function multDosNumeros (num1, num2){
    return num1 * num2;
}

const num1 = parseFloat(prompt("Digite o 1º número: "));
const num2 = parseFloat(prompt("Digite o 2º número: "));

console.log("Valor da multiplicação: ", multDosNumeros(num1,num2));