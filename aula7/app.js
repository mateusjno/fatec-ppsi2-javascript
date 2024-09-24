let pessoas = {
    'cpf' : '222222222',
    'nome' : 'Joao',
    'idade' : 34,
    'salario' : 12500.00,
    'dependentes' : false,
    'conhecimentos': [
        'PHP', 'JS', 'C#'
    ]
}



let arrayPessoa = [
    {
        'cpf': '134',
        'nome': 'Pedro',
        'idade' : 21,
        'sexo' : 'M',
        'conhecimentos': [
        'PHP', 'Python', 'C#'
        ],
        'salario' : 3000
    },
    {
        'cpf': '455',
        'nome': 'Tales',
        'idade' : 17,
        'sexo' : 'M',
        'conhecimentos': [
        'SQL', 'B', 'GO'
    ],
        'salario' : 2000
    },
    {
        'cpf': '425',
        'nome': 'ZZZ',
        'idade' : 23,
        'sexo' : 'F',
        'conhecimentos': [
        'Java', 'JS', 'Ruby'
    ],
        'salario' : 1000
    }
]


/* console.log(arrayPessoa[2].nome); */

/* arrayPessoa.forEach((pessoa, indice) => { 
    console.log("Pos atual é: "+indice);
        if(pessoa.sexo == 'F'){
            console.log('Nome: '+ pessoa.nome);
        }

        if(pessoa.idade < 18) {
            console.log('Menor de idade: ' + pessoa.nome);
        }

        pessoa.conhecimentos.forEach((linguagem) => {console.log(linguagem)})


 }); */

 var somaSalario = 0;
 var qtdeM = 0;
 var qtdeF = 0;
 maiorSalario = 0;
 menorSalario = 0;
 verifMenorSalario = true;
 maiorIdade = 0;
 menorIdade = 0;
 verifMenorIdade = true;


 arrayPessoa.forEach((pessoa) => {

    somaSalario = somaSalario + pessoa.salario;

    if(pessoa.sexo == "F"){
        qtdeF = qtdeF + 1;  
    }
    else if(pessoa.sexo == "M"){
        qtdeM = qtdeM + 1;
    }




    if(maiorSalario < pessoa.salario){
        maiorSalario = pessoa.salario;
    }

    if(verifMenorSalario){
        menorSalario = pessoa.salario;
        verifMenorSalario = false;
    }

    if(menorSalario > pessoa.salario){
        menorSalario = pessoa.salario;
    }



    if(maiorIdade < pessoa.idade){
        maiorIdade = pessoa.idade;
    }

    if(verifMenorIdade){
        menorIdade = pessoa.idade;
        verifMenorIdade = false;
    }

    if(menorIdade > pessoa.idade){
        menorIdade = pessoa.idade
    }




 })

 console.log("A soma de todos os salário é: "+somaSalario);
 console.log("Existem: "+qtdeM+" Homens e "+qtdeF+" Mulheres");
 console.log("O maior salário é: "+maiorSalario+"\ O menor salário é: "+menorSalario);
 console.log("A maior idade é: "+maiorIdade+"\ A menor idade é: "+menorIdade);


 arrayPessoa.forEach((pessoa) => {
    console.log(pessoa.nome+" salário: "+pessoa.salario+" teve um ajuste de salário de 15 % que equivale a: "+(parseFloat(pessoa.salario)*1.15));
 })

