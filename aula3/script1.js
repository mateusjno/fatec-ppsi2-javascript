var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var sexo = document.getElementById("sexo");
var cpf = document.getElementById("cpf");

var areaTexto = document.getElementById("resultado");

var btnInserir = document.getElementById("btnInserir");

btnInserir.addEventListener('click', valida);


function valida(){
    let msgErro = "";

    let nomeLimpo = nome.value.trim();
    let qtdCaract = nomeLimpo.length;

    if(qtdCaract < 4){
        msgErro += "Nome inválido, necessário mais que 4 caracteres!\n";
        nome.style.borderColor = 'red';
    }

    
    if(idade.value < 21 && sexo.value == feminino){
        msgErro += "Idade inválida";
    }
    else if (idade.value < 21 && sexo.value == feminino)






    areaTexto.value = msgErro;
    
}






