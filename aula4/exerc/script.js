var nome = document.getElementById("nome");
var tipo = document.getElementById("tipo");
var cpfcnpj = document.getElementById("cpfcnpj");
var rgie = document.getElementById("rgie");
var cep = document.getElementById("cep");

var btnInserir = document.getElementById("btnInserir");

btnInserir.addEventListener('click', funcaoValidar);

var alertaGeral;
var contador = 0;

function funcaoValidar(){

    
    alertaGeral = false;
    contador = 0;
    

    adicionaNot(nome, " ");
    adicionaNot(tipo, " ");
    adicionaNot(cpfcnpj, " ");
    adicionaNot(rgie, " ");
    adicionaNot(cep, " ");



    /* Lógicas de decisão */

        /* Nome */
        let nomeTrim = nome.value.trim();
        let nomeSemEspaco = nomeTrim.replace(" ", "");
        const palavrasSeparadas = nomeTrim.split(" ");
        let tamArray = palavrasSeparadas.length;

        if (tamArray < 2 || tamArray > 2) {
            alertaGeral = true;
            adicionaNot(nome, "Necessário duas palavras no nome!");
        }
        else if(nomeSemEspaco.length < 4){
            alertaGeral = true;
            adicionaNot(nome, "Necessário ao menos 4 caracteres");
        }
        else {
            alertaGeral = false;
            adicionaNot(nome, "Nome válido!!!");
        }
        /* Nome */


        /* CPF CNPJ */
        let cpfcnpjSubst = cpfcnpj.value.replaceAll("/","").replaceAll(".","");
        let cpfcnpjLimpo = cpfcnpjSubst.trim();

        if(tipo.value == "pf" && (cpfcnpjLimpo.length < 11 || cpfcnpjLimpo.length > 11)){
            alertaGeral = true;
            adicionaNot(cpfcnpj, "CPF inválido!!!");
        }
        else if(tipo.value == "pj" && (cpfcnpjLimpo.length < 14 || cpfcnpjLimpo.length > 14)){
            alertaGeral = true;
            adicionaNot(cpfcnpj, "CNPJ inválido!!!");
        }
        else if(cpfcnpjLimpo.length == 0){
            alertaGeral = true;
            adicionaNot(cpfcnpj, "Inválido!!!");
        }
        else{
            alertaGeral = false;
            adicionaNot(cpfcnpj, "Válido!!!");
        }

        /* CPF CNPJ */



        /* rg ie */
        let rgieSubst = rgie.value.replaceAll("/","").replaceAll(".","");
        let rgieLimpo = rgieSubst.trim();

    

        if(tipo.value == "pf" && (rgieLimpo.length < 9 || rgieLimpo.length > 9)){
            alertaGeral = true;
            adicionaNot(rgie, "RG inválido!!!");
        }
        else if(tipo.value == "pj" && (rgieLimpo.length < 12 || rgieLimpo.length > 12)){
            alertaGeral = true;
            adicionaNot(rgie, "IE inválido!!!");
        }
        else if(rgieLimpo.length == 0){
            alertaGeral = true;
            adicionaNot(rgie, "Inválido!!!");
        }
        else{
            alertaGeral = false;
            adicionaNot(rgie, "Válido!!!");
        }

        /* rg ie */



        /* cep */
        let cepSubst = cep.value.replaceAll("/","").replaceAll(".","");
        let cepLimpo = cepSubst.trim();


        if(cepLimpo.length < 8 || cepLimpo.length > 8){
            alertaGeral = true;
            adicionaNot(cep, "CEP Inválido!!!");
        }
        else if(rgieLimpo.length == 0){
            alertaGeral = true;
            adicionaNot(cep, "CEP Inválido!!!");
        }
        else{
            alertaGeral = false;
            adicionaNot(cep, "Válido!!!");
        }

        /* cep */






}

    /* Função de notificação de alerta */
        
function adicionaNot (input, mensagem){
    let notge;


    if(alertaGeral){
        input.style.borderColor = "red";
        let p = document.getElementsByClassName("notificacao-"+input.id);
        p[0].textContent =  mensagem;
        p[0].style.color = "red";
        notge = document.getElementsByClassName("notificacao-geral")[0];
        notge.textContent = "Formulário está com algum problema observe as informações abaixo!!!";
        notge.style.color = "white";
        notge.classList.remove("hidden");
        notge.classList.add("visible");
        notge.classList.remove("estiloalertaverde");
        notge.classList.add("estiloalertavermelho");
        contador++;

    }
    else{
        input.style.borderColor = "green";
        let p = document.getElementsByClassName("notificacao-"+input.id);
        p[0].textContent =  mensagem;
        p[0].style.color = "green";
        notge = document.getElementsByClassName("notificacao-geral")[0];
        notge.textContent = "Formulário preenchido corretamente!!!";
        notge.style.color = "white";
        notge.classList.remove("hidden");
        notge.classList.add("visible");
        notge.classList.remove("estiloalertavermelho");
        notge.classList.add("estiloalertaverde");

    }


    if (contador > 0){
        notge = document.getElementsByClassName("notificacao-geral")[0];
        notge.textContent = "Formulário está com algum problema observe as informações abaixo!!!";
        notge.style.color = "white";
        notge.classList.remove("hidden");
        notge.classList.add("visible");
        notge.classList.remove("estiloalertaverde");
        notge.classList.add("estiloalertavermelho");
    }
}



