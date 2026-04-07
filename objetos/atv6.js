//function recebendo objetos
class aluno {
    nomeDoAluno;
    idadeDoAluno;
    anoDeNascimento;

    constructor(nomeDoAluno, idadeDoAluno){
        this.nomeDoAluno = nomeDoAluno;
        this.idadeDoAluno = idadeDoAluno;
        this.anoDeNascimento = 2026 - idadeDoAluno;
    }

    descrever = function(){
        console.log(`Meu nome é ${this.nomeDoAluno} e tenho ${this.idadeDoAluno}`);
    }
};
//objeto => armazenam dados e funcionalidades
function compararPessoas(pessoa1, pessoa2){ //criamos uma funcao que, ao inves de receber um valor literal, estará recebendo objetos dentro dela
    if(pessoa1.idadeDoAluno > pessoa2.idadeDoAluno) {
        console.log(`${pessoa1.nomeDoAluno} é mais velho(a) que ${pessoa2.nomeDoAluno}`)
    }else if (pessoa2.idadeDoAluno > pessoa1.idadeDoAluno){
        console.log(`${pessoa2.nomeDoAluno} é mais velho(a) que ${pessoa2.nomeDoAluno}`)
    }else{
        console.log(`${pessoa1.nomeDoAluno} e ${pessoa2.nomeDoAluno} possuem a mesma idade.`)
    }
};

const matheus = new aluno('Davi Matheus', 21);
const igor = new aluno('Igor Escocio', 18);

compararPessoas(matheus,igor);


