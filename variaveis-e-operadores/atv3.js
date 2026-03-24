//Realizando operaçao booleana com numeros impares ou pares

const prompt = require ("prompt-sync")();
let numero = Number(prompt("Digite o número que deseja verificar: "));
if ((numero % 2) === 0){
    console.log(`O número ${numero} é par.`);
}else{
    console.log(`O número ${numero} é ímpar.`);
};