var valorGasolina = document.getElementById("gasolina");
var valorAlcool = document.getElementById("alcool");

var btnVerificar = document.getElementById("verificar");

const body = document.body;

btnVerificar.addEventListener('click', executar);




function executar (){

   verificarCampos(valorAlcool);
   verificarCampos(valorGasolina);

   if (!verificarCampos(valorAlcool) || !verificarCampos(valorGasolina)){
        let y = document.getElementsByClassName('resultadoClasse');
        y[0].textContent = "Erro! verifique os campos a acima!";
        body.style.backgroundColor = ""
   }
   else {
    logicaProg(valorAlcool,valorGasolina);
   }
    


}



function verificarCampos (campo) {
    let valorLimpo = campo.value.trim();
    if (valorLimpo == "" || isNaN(valorLimpo)){
        adicionarAlerta(campo, "Valor não deve estar vazio e deve ser número!");
        return false;
    }
    else{
        removeAlerta(campo, "Valor correto!")
        return true;
    }
}

function adicionarAlerta (input,mensagem){
    var x = document.getElementsByClassName('alerta-'+input.id);
    x[0].textContent = mensagem;
    x[0].style.color = "red";
    input.style.borderColor = "red";
}

function removeAlerta (input,mensagem){
    var x = document.getElementsByClassName('alerta-'+input.id);
    x[0].textContent = mensagem;
    x[0].style.color = "purple";
    input.style.borderColor = "green";
}



function logicaProg (valorAlcool,valorGasolina){
    let calculo = parseFloat(valorAlcool.value)/parseFloat(valorGasolina.value);
    let y = document.getElementsByClassName('resultadoClasse');

    if (calculo <= 0.7){
        
        y[0].textContent = "Abasteça com Álcool";
        body.style.backgroundColor = "red"
    }
    else{
        y[0].textContent = "Abasteça com Gasolina";
        body.style.backgroundColor = "green"
       
    }
}






