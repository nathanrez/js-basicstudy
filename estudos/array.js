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
