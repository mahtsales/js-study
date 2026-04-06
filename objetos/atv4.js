//Podemos também incluir o método constructor => cria as instâncias automaticamente

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

const davi = new aluno('Davi Matheus', 21);
const igor = new aluno('Igor Escocio', 18);

console.log(davi);
console.log(igor);
davi.descrever();
igor.descrever();