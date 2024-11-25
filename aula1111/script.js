let pessoa1 = {
    'codigo' : 2,
    'nome' : 'Maria'
}

let pessoa2 = {
    'codigo' : 3,
    'nome' : 'Mateus'
}

let arrayPessoas = [];

arrayPessoas.push(pessoa1);
arrayPessoas.push(pessoa2);

let jsonPessoa = JSON.stringify(arrayPessoas);

localStorage.setItem('cadastro', jsonPessoa);


let arrayStorage = JSON.parse(localStorage.getItem('cadastro'));



let html = '';
arrayStorage.forEach((p) => {
    html += `${p.nome}<br>`
})

document.getElementById('pessoas').innerHTML = html;