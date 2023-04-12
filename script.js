function inserir(num) {
    var numero_atual = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero_atual + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function deletar_um() {
    var numero_atual = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero_atual.substring(0, numero_atual.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado') = "Nada para calcular"
    }
}