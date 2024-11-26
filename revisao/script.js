var inputId = document.getElementById('id');
var inputNomeCurso = document.getElementById('nomecurso');
var inputSeguimento = document.getElementById('seguimento');

var btnListar = document.getElementById('listar');
var btnAdicionar = document.getElementById('enviar');
var btnEditar = document.getElementById('editar');
var btnExcluir = document.getElementById('excluir');



var verificacao = true;

var idedicao = -1;


//Botões//

btnAdicionar.addEventListener('click',adicionar);
btnListar.addEventListener('click',listar);


//Verificação dos campos//


function verificarCamposVazios (dadosDoCampo,objDoCampo){
    let valorLimpo = dadosDoCampo.trim();

    if(valorLimpo == ""){
        console.log(valorLimpo);
        adicionaAlerta(objDoCampo,"Campo não deve estar vazio");
        verificacao = false;
    }
    else{
        removeAlerta(objDoCampo,"Campo Correto!");
    }
}

function verificarSeguimentos(dadosDoCampo,objDoCampo){
    let valorLimpo = dadosDoCampo.trim();

    if(valorLimpo == 'saude' || valorLimpo == 'tecnologia' || valorLimpo == 'administracao'){
        removeAlerta(objDoCampo,"Campo Correto!");
    }
    else{
        adicionaAlerta(objDoCampo,"Campos não conferem!");
        verificacao = false;
    }
}

function adicionaAlerta (dadosDoCampo,mensagem){
    var alerta = document.getElementById('alerta-'+dadosDoCampo.id);
    alerta.textContent = mensagem;
    alerta.style.color = "red";
}

function removeAlerta (dadosDoCampo,mensagem){
    var alerta = document.getElementById('alerta-'+dadosDoCampo.id);
    alerta.textContent = mensagem;
    alerta.style.color = "green";
}



//Manipulação de dados via local storage//


    function listar(){

        let arrayCursosLocal = JSON.parse(localStorage.getItem('cursosFaculdade'));
        let table = '';


        arrayCursosLocal.forEach(
        (p) => {
        table += `<tr><td>${p.id}</td><td>${p.nomeCurso}</td><td>${p.seguimento}</td><td><button data-id='${p.id}' onclick="editar(this)">Editar</button></td><td><button data-id='${p.id}' onclick="excluir(this)">Deletar</button></td></tr>`;
        }
        );

        document.getElementById('dadosTabela').innerHTML = table;
    }

    function adicionar(){
        verificacao = true;

        var nomeCurso = inputNomeCurso.value;
        var seguimento = inputSeguimento.value;

        verificarCamposVazios(nomeCurso,inputNomeCurso);
        verificarCamposVazios(seguimento,inputSeguimento);
        verificarSeguimentos(seguimento,inputSeguimento);

        if (verificacao == true){

            let arrayCursos = [];

            if (localStorage.getItem('cursosFaculdade')){
               arrayCursos = JSON.parse(localStorage.getItem('cursosFaculdade'));
            }

            if(arrayCursos.find((p) => p.id == idedicao)){
                arrayCursos.forEach((p) => {
                    if(p.id == idedicao){
                        p.nomeCurso = nomeCurso;
                        p.seguimento = seguimento;
                        idedicao = -1;
                    }
                })
            }
            else{

                let identity = 1;
                if (localStorage.getItem('identity')) {
                let objIdentity = JSON.parse(localStorage.getItem('identity'));
                identity = objIdentity.value + 1;
                }
                localStorage.setItem('identity', JSON.stringify({value: identity}))

                let curso = {
                    'id' : identity,
                    'nomeCurso' : nomeCurso,
                    'seguimento' : seguimento
                }

                arrayCursos.push(curso);
            }

            let jsonCursosFaculdade = JSON.stringify(arrayCursos);

            localStorage.setItem('cursosFaculdade', jsonCursosFaculdade);

            listar();

        }
        else{

        }
    }

    function editar(elemento){
        verificacao = true;

        var nomeCurso = inputNomeCurso.value;
        var seguimento = inputSeguimento.value;


        if (verificacao == true){
            
            let idelemento = elemento.dataset.id;
            
            let arrayCursos = [];

            if(localStorage.getItem('cursosFaculdade')){
                arrayCursos = JSON.parse(localStorage.getItem('cursosFaculdade'));
            }

            let curso = arrayCursos.find((p) => p.id == idelemento);
            console.log(curso);


            inputNomeCurso.value = curso.nomeCurso;
            inputSeguimento.value = curso.seguimento;

            idedicao = idelemento;
        }
        else{
            
        }
    }
    
    function excluir(elemento){
        
        let idelemento = elemento.dataset.id;
            
            let arrayCursos = [];

            if(localStorage.getItem('cursosFaculdade')){
                arrayCursos = JSON.parse(localStorage.getItem('cursosFaculdade'));
            }

            let novoArrayCursos = arrayCursos.filter((p) => p.id != idelemento);
            
            let jsonCursosFaculdade = JSON.stringify(novoArrayCursos);

            localStorage.setItem('cursosFaculdade', jsonCursosFaculdade);

            listar();
    }



