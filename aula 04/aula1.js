function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Walter');

//-----------------------------------------------------------------


function quadrado (valor) {
   return valor * valor;

}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


//-----------------------------------------------------------------

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));


//-----------------------------------------------------------------

function calcularJuross(){

}

function main(){
    console.log('Programa principal');
    calcularJuross();
}

main();