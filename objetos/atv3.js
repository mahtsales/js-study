// classe => definicao do que deveria ser o objeto. //instância => ocorrencia do objeto definido.
class pessoa { 
    nome;
    idade;

    descrever(){
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}
//definimos a pessoa e suas instancias a serem chamadas
const matheus = new pessoa();
matheus.nome = 'Davi Matheus';
matheus.idade = 21;
//chamamos a variavel matheus
console.log(matheus);
//chamamos a funcao da classe pessoa
matheus.descrever();
