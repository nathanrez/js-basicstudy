/* ex 1 

const tarefas = [];

function adicionarTarefa(){
    let adicionar = prompt("digite a tarefa: ")
    tarefas.push(adicionar);
}

function listarTarefas(){
    console.log(tarefas);
}

let acao = "";

while (acao !== "sair") {
    acao = prompt("Escolha: adicionar | listar | sair: ");
    
    if(acao == "adicionar"){
        adicionarTarefa();
    }
    else if (acao == "listar") {
        listarTarefas();
    }
}
*/

/* ex 2
const tarefas = [];

function adicionarTarefa(){
    let adicionar = prompt("Digite a tarefa: ");
    tarefas.push(adicionar); 
}

function listarTarefas(){
    console.log(tarefas);
}

function removerTarefas(){
    console.log(tarefas);
    let remover = Number(prompt("Qual tarefa deseja remover (digite a posição): "));
    const removerTarefas = tarefas.splice(remover - 1, 1);
}

let acao = "";

while (acao !== "sair"){
    acao = prompt("Escolha: adicionar | listar | remover | sair: ");
    if(acao == "adicionar"){
        adicionarTarefa();
    }
    else if(acao == "listar"){
        listarTarefas();
    }
    else if(acao == "remover"){
        removerTarefas();
    }
}

*/

// ex 3

const carrinho = [];

function adicionarItem(){
    let nomeItem = prompt("Qual item? ");
    let precoItem = Number(prompt("Qual preco? "));
    let qtdItem = Number(prompt("Quantas und? "));

    let item = {
        nome: nomeItem,
        preco: precoItem,
        qtd: qtdItem
    };

    carrinho.push(item);
}

function listarItem(){
    console.log(carrinho);
}

function removerItem(){
    console.log(carrinho);
    let itemRemovido = Number(prompt("Digite a posicao do item que deseja remover: "));
    carrinho.splice(itemRemovido - 1, 1);
}

function finalizarCompra(){
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco * carrinho[i].qtd;
    }

    console.log(`Total da compra: ${total}`);

    carrinho.splice(0, carrinho.length); // esvazia o carrinho
}

let acao = "";

while (acao !== "sair"){
    acao = prompt("Escolha: adicionar | listar | remover | finalizar | sair: ");

    if(acao == "adicionar"){
        adicionarItem();
    }
    else if(acao == "listar"){
        listarItem();
    }
    else if(acao == "remover"){
        removerItem();
    }
    else if(acao == "finalizar"){
        finalizarCompra();
    }
}

// metodos
const produtos = ["abacaxi", "arroz", "refrigerante"];

produtos.join ( " - "); // troca a virgula pelo -, ou seja, troca o separador.
produtos.pop(); // remove o ultimo item do array (seria removido o refrigerante)
produtos.push("feijao"); //adiciona um item no array, ficaria: const produtos = ["abacaxi", "arroz", "refrigerante", "feijao"].
produtos.shift(); // remove o primeiro item, no caso "abacaxi". Automaticamente, todos os itens sao alterados.
produtos.unshift("abacate"); //adiciona "abacate" na primeira posicao, ficaria const produtos = ["abacate", "abacaxi", "arroz", "refrigerante"].
delete pessoa[0]; // deleta o primeiro item, porem nao muda as posicoes. Ou seja, troca a primeira posicao para undefined. Deixa buracos, nao recomendavel
pessoa.splice(1, 0, "item adicionado 1", "item adicionado 2"); // ira adicionar os itens na posicao 1 (declarado dentro do()) e o 0 significa que nao pode remover nenhum item. Se trocar 0 por 1, ele ira remover o item que esta na proxima posicao.

const lista1 = ["arroz", "feijao", "macarrao"];
const lista2 = ["suco", "agua", "refrigerante"];

const superLista = lista1.concat(lista2); // cria um novo array para juntar/concatenar as outras 2 lista (lista1 e lista2).

const jogadores = ["alison", "ney", "ronaldinho", "kaka", "pele", "nathan"];
const craques = jogadores.slice(2); //ele ira separar e mostrar da posicao 2 para frente
const craques2 = jogadores.slice(2, 4); //o 4 seria o limitador, ele vai mostrar apenas da posicao 2 a 4.

const jogadoresAlfa = jogadores.sort(); // organiza o array em ordem alfabetica.
const jogadoresAlfaDesc = jogadores.reverse(); // primeiro usa o sort para deixar alfabetico e depois usa o reverse para mostrar ao contrario (de Z a A).

const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(); // ele somente faz a ordem para texto. entao ficaria 1, 10, 100, 25, 40, 5. A primeira casa conta como se fosse ordem alfabetica.
numeros.sort(function(a, b){return a-b}) // essa funcao faz a comparacao numerica para ver qual seria maior ou menor. entao deixaria em ordem numerica corretamente.

function MaiorNumero(array){
    return Math.max.apply(null, array);
} // essa funcao serve para ver qual seria o maior numero. Voce chama (usando console, alert, etc...) a funcao MaiorNumero.

function MaiorNumero(array){
    return Math.min.apply(null, array);
} // para ver o menor numero

//filtragem de numeros abaixo
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}
// fim filtragem

