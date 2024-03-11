/*

    2) O IMC - Indice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de
    peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo coma tabela
    abaixo:

    IMC em adultos condição:

    - Abaixo de 18.5 abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 obeso;
    - Acima de 40 obsesidade grave;

*/


function calcularImc (peso, altura) {
    return peso / Math.pow(altura, 2);

}

function classificarImc(imc){
    if (imc < 18.5){
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25){
        return 'Peso normal';
    } else if (imc >=25 && imc < 30){
        return 'Acima do peso';
    } else if (imc >=30 && imc < 40){
        return 'Obeso';
    } else {
        return 'Obsesidade grave';
    }
    

}

function main(){

    let peso = 80;
    let altura = 1.75;

    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

}

main();


