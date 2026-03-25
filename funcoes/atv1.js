function quadrado (valor){
    return valor * valor;  
}

console.log(quadrado(2) * quadrado(2));

function potencia (base, expoente){
    return Math.pow(base,expoente);
}

console.log(potencia(2,3));

function imc (peso, altura){
    return (peso / Math.pow(altura,2)).toFixed(2);
}

console.log(imc(80,1.80));