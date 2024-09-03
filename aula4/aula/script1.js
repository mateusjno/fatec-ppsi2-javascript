var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var sexo = document.getElementById("sexo");
var cpf = document.getElementById("cpf");

var areaTexto = document.getElementById("resultado");

var btnInserir = document.getElementById("btnInserir");

btnInserir.addEventListener('click', valida);


function valida(){
    let msgErro = "";
    removeAlerta(nome,"");
    removeAlerta(idade,"");
    removeAlerta(sexo,"");
    removeAlerta(cpf,"");

    let alertaBol = false;

    let nomeLimpo = nome.value.trim();
    let qtdCaract = nomeLimpo.length;

    if(qtdCaract < 4){
        msgErro += "Nome inválido, necessário mais que 4 caracteres!\n";
        adicionaAlerta(nome, "Nome inválido, necessário mais que 4 caracteres!");
        alertaBol = true;
    }

    
    if(idade.value < 21 && sexo.value == "feminino"){
        msgErro += "Idade inválida\n";
        adicionaAlerta(idade, "Idade inválida!!!")
        alertaBol = true;
    }
    else if (idade.value < 18 && sexo.value == "masculino"){
        msgErro += "Idade inválida\n"; 
        adicionaAlerta(idade, "Idade inválida!!!") 
        alertaBol = true;
    }
    else if (idade.value < 18 || idade.value == ""){
        msgErro += "Idade inválida\n"; 
        adicionaAlerta(idade, "Idade inválida!!!") 
        alertaBol = true; 
    }


    if (cpf.value.length > 11 || cpf.value.length < 11){
        msgErro += "CPF inválido!!\n";
        adicionaAlerta(cpf, "CPF inválido!!!")
        alertaBol = true;
    }

    let alertGeral = document.getElementsByClassName("alerta-geral")[0];

    if (alertaBol) {
        alertGeral.classList.remove("hidden");
        alertGeral.classList.add("visible");
    }
    else{
        alertGeral.classList.remove("visible");
        alertGeral.classList.add("hidden");
    }

    console.log(alertaBol);
    


    areaTexto.value = msgErro;


    function adicionaAlerta(input, mensagem) {
        input.style.borderColor = 'red';
        var p = document.getElementsByClassName('alerta-'+input.id)
        p[0].textContent = mensagem;

    }

    function removeAlerta(input, mensagem){
        input.style.borderColor = '';
        var p = document.getElementsByClassName('alerta-'+input.id)
        p[0].textContent = "";
    }
    
}






