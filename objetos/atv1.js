//metodos de objetos no js
const davi = {
    nome: "Davi",
    idade: 21,
    profissao: "Programador",
    hobbies: ["jogar", "ler", "viajar"],
    saudacao: function() { //criacao de um metodo para o objeto => uma funcao dentro do objeto
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`); //sempre q quisermos chamar o valor, iremos concatenar => ${this.valor}
    }
};
console.log(davi);
davi.saudacao();

//para adicionar algum item dentro do objeto, realizamos da seguinte maneira:

davi.altura = 1.83;
console.log(davi);

davi.nome = "Matheus";
davi.idade = 22;

console.log(davi)