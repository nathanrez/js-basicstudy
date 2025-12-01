function verificaCor(){
    let cor = prompt("Digite uma cor: " );
    cor = cor.toLowerCase();
    
    switch(cor){
        case "azul":
            console.log("Usuario digitou azul");
            break;
        case "vermelho":
            console.log("Usuario digitou vermelho");
            break;
        case "amarelo":
            console.log("Usuario digitou amarelo");
            break;
        default:
            console.log("usuario digitou uma cor indisponivel");
    }

}

// ex 1 - Taverna nordica

let cardapio = [
    {nome: "Suco de Laranja", preco: 6.70},
    {nome: "Espetinho de carne", preco: 9.90},
    {nome: "Refrigerante Lata", preco: 5.00},
    {nome: "Pao de Queijo", preco: 4.00},
    {nome: "Coxinha", preco: 5.00},
    {nome: "Agua Mineral", preco: 3.50}
];

let comanda = [];
let acao = "";

while (acao !== "sair") {

    let cliente = Number(prompt("\nEscolha uma opcao: \n1 - Mostrar cardápio \n2 - Adicionar item ao cardápio \n3 - Fazer um pedido \n4 - Listar pedidos \n5 - Cancelar último pedido \n6 - Sair\n"));

    switch(cliente) {

        case 1:
            cardapio.forEach(function(item){
                console.log(`${item.nome} - R$ ${item.preco}`);
            });
            break;

        case 2:
            function adicionarItem(){
                let addNome = prompt("Qual nome do produto?\n");
                let addPreco = Number(prompt("Qual preco do produto?\n"));
                
                let novoItem = { nome: addNome, preco: addPreco };
                
                cardapio.push(novoItem);
                console.log("===Cardapio Atualizado Com Sucesso===");

                cardapio.forEach(function(item){
                    console.log(`${item.nome} - R$ ${item.preco}`);
                });
            }

            adicionarItem();
            break;

        case 3:

            let pedido = prompt("Qual seu pedido? (n para encerrar)\n\n").trim().toLowerCase();

            while (pedido !== "n") {

                let encontrado = cardapio.find(item => item.nome.toLowerCase() === pedido);

                if (encontrado) {
                    comanda.push(encontrado);
                    console.log("Adicionado:", encontrado.nome);
                } else {
                    console.log("Item não encontrado.\n");
                }

                pedido = prompt("Outro pedido? (n para encerrar)\n\n").trim().toLowerCase();
            }

            console.log("Comanda final:", comanda);
            break;

        case 4:
            console.log("=== Lista de Pedidos ===");
            comanda.forEach((item, i) =>
                console.log(`${i + 1} - ${item.nome} (R$ ${item.preco})`)
            );
            break;

        case 5:
            function cancelarItem(){
                console.log("=== Sua comanda atual ===");
                comanda.forEach((item, i) =>
                    console.log(`${i+1} - ${item.nome}`)
                );

                let removerItem = Number(prompt("Digite o numero do item que voce deseja cancelar\n"));
                comanda.splice(removerItem - 1, 1);
            }
            cancelarItem();
            break;

        case 6:
            acao = "sair";
            console.log("Saiu do sistema!");
            break;

        default:
            console.log("Opção inválida");
    }
}
