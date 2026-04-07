//criacao de classe pessoa - instanciando objetos a partir de uma classe
//classe => molde para criar um objeto; definicao || instancia => objeto criado a partir de uma classe; ocorrencia

class aluno {
    nomeDoAluno;
    idadeDoAluno;
    anoDeNascimento;

    descrever = function(){
        console.log(`Meu nome é ${this.nomeDoAluno} e tenho ${this.idadeDoAluno}`);
    }
};

const davi = new aluno();
davi.nomeDoAluno = 'Davi Matheus';
davi.idadeDoAluno = 21;
davi.anoDeNascimento = 2026 - davi.idadeDoAluno;

const igor = new aluno();
igor.nomeDoAluno = 'Igor Escocio';
igor.idadeDoAluno = 18;
igor.anoDeNascimento = 2026 - igor.idadeDoAluno;

console.log(davi);