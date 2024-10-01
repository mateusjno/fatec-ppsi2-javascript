let produto1 = {
    'codigo': 315,
    'descricao': 'ORIGINAL 600 ML',
    'categoria': 'CERVEJA',
    'valor': 30,
}   

let produto2 = {
    'codigo': 340,
    'descricao': 'FANTA UVA 350 ML',
    'categoria': 'REFRIGERANTE',
    'valor': 8,
}

let produto3 = {
    'codigo': 342,
    'descricao': 'COCA-COLA 350 ML',
    'categoria': 'REFRIGERANTE',
    'valor': 9,
}

let produto4 = {
    'codigo': 345,
    'descricao': 'SKOL 600 ML',
    'categoria': 'CERVEJA',
    'valor': 28,
}

let produto5 = {
    'codigo': 345,
    'descricao': 'SKOL 600 ML',
    'categoria': 'CERVEJA',
    'valor': 28,
}  

let produto6 = {
    'codigo': 345,
    'descricao': 'SKOL 600 ML',
    'categoria': 'CERVEJA',
    'valor': 28,
}  

let produto7 = {
    'codigo': 345,
    'descricao': 'SKOL 600 ML',
    'categoria': 'REFRIGERANTE',
    'valor': 28,
}  


let arrayProdutos = [
    produto1,
    produto2,
    produto3,
    produto4,
    produto5,
    produto6,
    produto7,
]


var maiorValorR = 0;
var menorValorR = 0;


const maiorValor = (produtos,categoria) => {


    produtos.forEach((p) => {
        if (p.valor > maiorValorR && p.categoria == categoria){
            maiorValorR = p.valor;
        }
    })

    return maiorValorR;


}

const menorValor = (produtos, categoria) => {


    produtos.forEach((p) => {
        if (p.categoria == categoria){
            menorValorR = p.valor;
        }
        if (p.valor < menorValorR && p.categoria == categoria){
            menorValorR = p.valor;
        }
    })

    return menorValorR;


}


const produtosCategoria = (produto,categoria) => {
        qtdeItens = 0;
    
        produto.forEach((p) => {
            if (p.categoria == categoria){
            qtdeItens += 1;
            }
        })

        return categoria+" "+qtdeItens;
}


const qtdeProdutosCateg = (produtos) => {

    let arrayCategorias = [];
    produtos.forEach((p) => {
        if(arrayCategorias[p.categoria] == undefined){
            arrayCategorias[p.categoria] = 1;
        }
        else{
            arrayCategorias[p.categoria] += 1;
        }
    })
    return arrayCategorias;

}

console.log(qtdeProdutosCateg (arrayProdutos));


 
/* console.log(produtosCategoria(arrayProdutos,arrayCategorias)); */

/* console.log(maiorValor(arrayProdutos,'CERVEJA'));
console.log(menorValor(arrayProdutos,'CERVEJA')); */