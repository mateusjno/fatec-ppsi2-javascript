// Recebendo os valores de peso e altura e gravando em variáveis
var inputPeso = document.getElementById("peso");
var inputAltura = document.getElementById("altura");

// Recebendo o elemento body para troca da cor de fundo
const body = document.body;

// Recendo o botão
var btnCalcular = document.getElementById("calcular");

// Criando a variável da TextArea para exibir resultado depois
var inputTextArea = document.getElementById("resultado");

//Adicionando o evento de clicar para calcular
btnCalcular.addEventListener("click", gravar);

//Agora colocando a função para validação e cálculo
function gravar() {
  let possuiErros = false;

  removeAlerta(inputPeso);
  removeAlerta(inputAltura);

  let peso = inputPeso.value.trim();
  if (peso.length < 2) {
    possuiErros = true;
    adicionaAlerta(inputPeso, "O peso deve ser maior que 10kg");
    body.style.backgroundColor = "";
  }

  let altura = inputAltura.value.trim();
  if (altura.length < 2) {
    possuiErros = true;
    adicionaAlerta(inputAltura, "A altura deve ser maior que 100cm");
    body.style.backgroundColor = "";
  }

  // Se não houver erros, faz o cálculo
  if (!possuiErros) {
    calcular();
  }
}

function calcular() {
  let peso = parseFloat(inputPeso.value);
  let altura = parseFloat(inputAltura.value);
  let resultado = calcularIMC(peso, altura);
  console.log(resultado);

  if (resultado < 18.5) {
    inputTextArea.value = "Abaixo do peso.";
    body.style.backgroundColor = "#49966C";
  } else if (resultado >= 18.5 && resultado < 24.99) {
    inputTextArea.value = "Peso normal.";
    body.style.backgroundColor = "#A3D028";
  } else if (resultado >= 25 && resultado < 29.9) {
    inputTextArea.value = "Sobrepeso.";
    body.style.backgroundColor = "#FBA607";
  } else if (resultado > 30) {
    inputTextArea.value = "Obesidade.";
    body.style.backgroundColor = "#F57601";
  }
}

// Função para fazer a operação com os números
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Função para adicionar o alerta caso não seja escrito nada
function adicionaAlerta(input, mensagem) {
  input.style.borderColor = "red";

  var p = document.getElementsByClassName("alerta-" + input.id);
  p[0].textContent = mensagem;
}

// Função para remover o alerta criado
function removeAlerta(input) {
  input.style.borderColor = "";

  var p = document.getElementsByClassName("alerta-" + input.id);
  p[0].textContent = "";
}
