/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculade 
    calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:

    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/


let nota1 = 8;
let nota2 = 8;
let nota3 = 7;

let mediaDasNotas = (nota1 + nota2 + nota3) / 3;

if (mediaDasNotas < 5){
    console.log('Reprovado');
} else if (mediaDasNotas >=5 && mediaDasNotas <= 7){
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}