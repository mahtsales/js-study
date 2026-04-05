//adicionando dois tipos de objetos dentro de um só objeto denominado alunos

const alunos = {
aluno1: {
    nome: "Davi",
    idade: 21,
    profissao: "Programador",
    hobbies: ["jogar", "ler", "viajar"],
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
},
aluno2: {
    nome: "Matheus",
    idade: 22,
    profissao: "Designer",
    hobbies: ["desenhar", "viajar", "cozinhar"],
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
};

console.log(alunos);
alunos.aluno1.saudacao();
alunos.aluno2.saudacao();