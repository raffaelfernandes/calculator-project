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

function modo_claro(){
    document.getElementById('fundo').style.backgroundImage = "linear-gradient(45deg, rgb(0, 101, 252), rgb(207, 235, 247))";
    document.getElementById('fundo').style.color = "white";
    document.getElementById('resultado').style.backgroundColor = "white";
}

function modo_escuro(){
    document.getElementById('fundo').style.backgroundImage = "linear-gradient(45deg, rgb(3, 21, 48), rgb(3, 96, 136))";
    document.getElementById('fundo').style.color = "rgb(151, 151, 151)";
    document.getElementById('resultado').style.backgroundColor = "rgb(151, 151, 151)";
}
