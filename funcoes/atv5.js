function somaDosNumeros(){
    const prompt = require ("prompt-sync")();
    const valor1 = Number(prompt("Digite o 1º número: "));
    const valor2 = Number(prompt("Digite o 2º número: "));
    
    return valor1 + valor2;
}

console.log("Soma:", somaDosNumeros());

function MyButton(){
    return(
        <button>Click me</button>
    );
}