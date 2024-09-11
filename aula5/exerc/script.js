var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

var corSelecionada = document.getElementById("cores");

var btnMudarCor = document.getElementById("btnMudarCor");
btnMudarCor.addEventListener('click', mudaCor);

var contador = false;


function mudaCor() {

        if (contador){
            texto2.style.backgroundColor = texto1.style.backgroundColor;
        }

        let corSelecionadaValor = corSelecionada.value;

        if (corSelecionadaValor == "vermelho"){
            texto1.style.backgroundColor = "red";
            contador = true;
        }
        else if (corSelecionadaValor == "verde"){
            texto1.style.backgroundColor = "green";
            contador = true;
        }
        else if (corSelecionadaValor == "azul"){
            texto1.style.backgroundColor = "blue";
            contador = true;
        }



}