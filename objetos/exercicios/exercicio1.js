/*
    1 - Crie uma classe para representar carros.
    Os carros possuem um marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

//classe criada para representar 'Carros'
class Carros { 
    modelo;
    cor;
    gastoMedio;
    //variaveis dentro de classes => sao denominadas atributos
    constructor(modelo, cor, gastoMedio) {
        this.modelo = modelo; // modelo seria um atributo do carro 
        this.cor = cor; // cor seria um atributo do carro
        this.gastoMedio = gastoMedio; //gasto seria um atributo do carro
    }

    calcularGasto(distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    }
};

const uno = new Carros('Fiat', 'Vermelho', 1/12);
console.log(uno);
console.log(uno.calcularGasto(70,5.89));

