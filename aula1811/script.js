// Pegando os elementos do HTML pelos seus IDs
var inputId = document.getElementById('id');
var inputNome = document.getElementById('nome');
var inputIdade = document.getElementById('idade');
var inputSalario = document.getElementById('salario');
var inputFaculdade = document.getElementById('faculdade');
var btnGravar = document.getElementById('gravar');
var btnLimpar = document.getElementById('limpar');
var btnMostrar = document.getElementById('mostrar');

// Adicionando ouvintes de eventos aos botões
btnGravar.addEventListener('click', enviar);
btnMostrar.addEventListener('click', mostrar);
btnLimpar.addEventListener('click', limpar);

// Função para enviar os dados
function enviar (){
    // Criando um objeto pessoa com os valores dos inputs
    pessoa = {
        'id' : inputId.value,
        'nome' : inputNome.value,
        'idade' : inputIdade.value,
        'salario' : inputSalario.value,
        'faculdade' : inputFaculdade.value
    }

    // Inicializando um array vazio para armazenar as pessoas
    let arrayPessoas = [];

    // Se já existe um cadastro no localStorage, carregamos ele no array
    if(localStorage.getItem('cadastro')){
        arrayPessoas = JSON.parse(localStorage.getItem('cadastro'));
    }

    

    if(arrayPessoas.find((p) => p.id == inputId.value)){
        arrayPessoas.forEach((p) => {
            if(p.id == inputId.value){
                p.nome = inputNome.value;
                p.idade = inputIdade.value;
                p.salario = inputSalario.value;
                p.faculdade = inputFaculdade.value;
            }
        })
    }
    else{
        arrayPessoas.push(pessoa);
    }

    // Convertendo o array para JSON
    let jsonPessoas = JSON.stringify(arrayPessoas);

    // Salvando o JSON no localStorage
    localStorage.setItem('cadastro', jsonPessoas);

    mostrar();
}

// Função para mostrar os dados armazenados
function mostrar (){
    // Carregando os dados do localStorage
    let arrayPessoasLocalS = JSON.parse(localStorage.getItem('cadastro'));
    let table = '';

    // Adicionando a linha de cabeçalho na tabela
    table += `<tr><th>Id</th><th>Nome</th><th>Idade</th><th>Salario</th><th>Faculdade</th><th style="border: none;">Acões</th></tr>`;

    // Iterando sobre o array para criar linhas na tabela com os dados
    arrayPessoasLocalS.forEach(
        (p) => {
            table += `<tr><td>${p.id}</td><td>${p.nome}</td><td>${p.idade}</td><td>${p.salario}</td><td>${p.faculdade}</td><td><button data-id='${p.id}' onclick="editar(this)">Editar</button></td><td><button data-id='${p.id}' onclick="excluir(this)">Deletar</button></td></tr>`;
        }
    );

    // Inserindo a tabela no HTML
    var tablePessoas = document.getElementById('tabela').innerHTML = table;
}

// Função para limpar os inputs
function limpar () {
    inputId.value = "";
    inputNome.value = "";
    inputIdade.value = "";
    inputSalario.value = "";
    inputFaculdade.value = "";
}




function editar(elemento){
    let idelemento = elemento.dataset.id

    let arrayPessoas = [];

    if(localStorage.getItem('cadastro')){
        arrayPessoas = JSON.parse(localStorage.getItem('cadastro'));
    }


    let pessoa = arrayPessoas.find((p) => p.id == idelemento);

    inputId.value = pessoa.id;
    inputNome.value = pessoa.nome;
    inputIdade.value = pessoa.idade;
    inputSalario.value = pessoa.salario;
    inputFaculdade.value = pessoa.faculdade;
}



function excluir(elemento){
    let idelemento = elemento.dataset.id;


    let arrayPessoas = [];

    if(localStorage.getItem('cadastro')){
        arrayPessoas = JSON.parse(localStorage.getItem('cadastro'));
    }

    let novoArray = arrayPessoas.filter((p) => p.id != idelemento);

    let jsonPessoas = JSON.stringify(novoArray);

    localStorage.setItem('cadastro', jsonPessoas);

    mostrar();
}
