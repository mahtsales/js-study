//criacao de objeto simples

const pessoa = {
    name: 'Davi Matheus F Sales',
    age: 21,
    profession: 'Developer Back-end',
    
    description: function (){
        console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos e sou ${this.profession}`);
    }
};

console.log(pessoa);
pessoa.description();

pessoa['name'] = 'Davi Sales'; // => alterando nome de maneira dinamica
pessoa.age = 22; // => alterando idade de maneira direta

console.log(pessoa);