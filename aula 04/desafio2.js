function aplicarDesconto(valor, desconto){

    return (valor - (valor * desconto / 100));

}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

let precoDoProduto = 100;

let formaDePagamento = 4;



if (formaDePagamento === 1){
    console.log(aplicarDesconto(precoDoProduto, 10));
} else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoDoProduto, 15));
} else if (formaDePagamento === 3){
    console.log(aplicarDesconto(precoDoProduto, 0));
} else {
    console.log(aplicarJuros(precoDoProduto, 10));
}