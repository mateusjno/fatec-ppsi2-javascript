var nome = document.getElementById("nome");
var tipo = document.getElementById("tipo");
var cpfcnpj = document.getElementById("cpfcnpj");
var rgie = document.getElementById("rgie");
var cep = document.getElementById("cep");

var btnInserir = document.getElementById("btnInserir");

btnInserir.addEventListener('click', funcaoValidar);

var alertaGeral;

function funcaoValidar(){

    alertaGeral = false;

    adicionaNot(nome, " ");
    adicionaNot(tipo, " ");
    adicionaNot(cpfcnpj, " ");
    adicionaNot(rgie, " ");
    adicionaNot(cep, " ");

    let nomeLimpo = nome.value.trim();

    
    if(nomeLimpo.length < 4 || nomeLimpo.length > 400){
        alertaGeral = true;
        adicionaNot(nome, "Nome inválido, necessário mais que 4 caracteres e menos que 400");
    }
    else{
        adicionaNot(nome, "Nome válido!!");
    }



}


function adicionaNot (input, mensagem){
    let notge;


    if(alertaGeral){
        input.style.borderColor = "red";
        let p = document.getElementsByClassName("notificacao-"+input.id);
        p[0].textContent =  mensagem;
        p[0].style.color = "red";
        notge = document.getElementsByClassName("notificacao-geral")[0];
        notge.textContent = "Formulário está com alguma problema observe as informações a baixo!!!";
        notge.style.color = "white";
        notge.classList.remove("hidden");
        notge.classList.add("visible");
        notge.classList.remove("estiloalertaverde");
        notge.classList.add("estiloalertavermelho");

    }
    else{
        input.style.borderColor = "green";
        let p = document.getElementsByClassName("notificacao-"+input.id);
        p[0].textContent =  mensagem;
        p[0].style.color = "green"
        notge = document.getElementsByClassName("notificacao-geral")[0];
        notge.textContent = "Formulário preenchido corretamente!!!";
        notge.style.color = "white";
        notge.classList.remove("hidden");
        notge.classList.add("visible");
        notge.classList.remove("estiloalertavermelho");
        notge.classList.add("estiloalertaverde");

    } 
}



