/*

    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
     de etiqueta e a escolha da condição de pagamento.
     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o
     Calculo adequado.

     Código Condição de pagamento:
     1- A vista Débito, recebe 10% de desconto;
     2- A vista no dinheiro ou PIX, recebe 15% de desconto;
     3- Em duas vezes, preço normal de etiqueta sem juros;
     4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

let precoDoProduto = 100;

let formaDePagamento = 4;



if (formaDePagamento === 1){
    console.log(precoDoProduto - (precoDoProduto * 0.1));
} else if (formaDePagamento === 2){
    console.log(precoDoProduto - (precoDoProduto * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoDoProduto);
} else {
    console.log(precoDoProduto + (precoDoProduto * 0.1));
}