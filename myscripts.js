/**
 * Codigo JavaScript Calculadora
 */
function insert(valor){
var num;

num = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = num + valor;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado;
    resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcula(){
    var resultado;
    resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Erro!..."
    }
}