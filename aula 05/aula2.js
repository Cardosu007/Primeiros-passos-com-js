class Pessoa {

    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

/*
const walter = new Pessoa('Walter', 30);

const renan = new Pessoa('Renan', 25);


console.log(walter);
console.log(renan);

walter.descrever();
renan.descrever();
*/ // desativar embaixo para ativar essa parte e assim por diante


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const walter = new Pessoa('Walter', 30);

const renan = new Pessoa('Renan', 25);

compararPessoas(walter, renan);