var numeroUm = document.getElementById("numeroum");
var numeroDois = document.getElementById("numerodois");
var selectOperacao = document.getElementById("operacao");

var btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", exibeCalculo);

textResultado = document.getElementsByClassName("resultado");


function calculaDoisNumeros(){
    
    switch (selectOperacao.value) {
        case "soma":
            return somaDoisNumeros(parseFloat(numeroUm.value),parseFloat(numeroDois.value));
            break;
        case "subtracao":
            return subtraiDoisNumeros(parseFloat(numeroUm.value),parseFloat(numeroDois.value));
            break;
        case "multiplicacao":
            return multiplicaDoisNumeros(parseFloat(numeroUm.value),parseFloat(numeroDois.value));
            break;
        case "divisao":
            return divideDoisNumeros(parseFloat(numeroUm.value),parseFloat(numeroDois.value));
            break;
    }

}


function somaDoisNumeros (numeroUm,numeroDois) {
    return (numeroUm + numeroDois);
}

function subtraiDoisNumeros (numeroUm,numeroDois){
    return (numeroUm - numeroDois);
}

function multiplicaDoisNumeros (numeroUm,numeroDois){
    return (numeroUm * numeroDois);
}

function divideDoisNumeros (numeroUm,numeroDois){
    return (numeroUm / numeroDois);
}


function exibeCalculo() {
    textResultado[0].textContent = "O resultado da conta é: "+calculaDoisNumeros();
    textResultado[0].classList.add("estiloResultado");
}