const produto = {
    nome: "fones",
    preco: 87.90,
    estoque: 20,
    ativo: false
}

produto.venda = function(){
    let qtdVenda = Number(prompt("Quantos vendidos?"));

    if(qtdVenda <= produto.estoque && produto.ativo == true){
        let qtdEstoque = produto.estoque - qtdVenda;
        produto.estoque = qtdEstoque;
        console.log(`Venda realizada com sucesso! | Estoque: ${produto.estoque}`);
    } else if(qtdVenda > produto.estoque && produto.ativo == true){
        console.log(`${qtdVenda} Nao disponiveis | Estoque: ${produto.estoque}`);
    } else{
        console.log("Produto nao disponivel");
    }
}

produto.reabastecer = function(){
    let qtdReabastecimento = Number(prompt("Quantos produtos reabastecidos?"));
    produto.estoque = produto.estoque + qtdReabastecimento;
    console.log(`Reabastecido com sucesso! | Estoque: ${produto.estoque}`);
}

produto.ativar = function(){
    produto.ativo = true;
    console.log(`Ativado com sucesso! | Disponibilidade: ${produto.ativo}`);
}

produto.desativar = function(){
    produto.ativo = false;
    console.log(`Desativado com sucesso! | Disponibilidade: ${produto.ativo}`);
}

produto.detalhes = function(){
    console.log(`Nome: ${this.nome} | Preco: ${this.preco} | Estoque: ${this.estoque} | Disponível: ${this.ativo}`);
}

produto.detalhes();

let acaoProduto = "";

while (acaoProduto !== "sair"){
    acaoProduto = prompt("Digite uma ação: vender, reabastecer, ativar, desativar, sair: ");

    if(acaoProduto == "vender"){
        produto.venda();
    }
    else if(acaoProduto == "reabastecer"){
        produto.reabastecer();
    }
    else if(acaoProduto == "ativar"){
        produto.ativar();
    }
    else if(acaoProduto == "desativar"){
        produto.desativar();
    }
    else if (acaoProduto !== "sair") {
        console.log("Digite uma opcao valida");
    }
}