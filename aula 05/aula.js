



const walter = {
    nome: 'Walter F Cardoso',
    idade: 30,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}


walter.descrever();

console.log(walter['nome'])




/*
console.log(walter.nome);
console.log(walter.idade);
console.log(walter);

walter.altura = 1.75

console.log(walter)

*/