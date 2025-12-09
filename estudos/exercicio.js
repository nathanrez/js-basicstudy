const alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Diego", nota: 9.5},
    {nome: "Heitor", nota: 6},
    {nome: "Kaue", nota: 4.75},
    {nome: "Giovanna", nota: 10},
    {nome: "Sabrina", nota: 7.5},
];

let opcoes = Number(prompt("\nEscolha uma opcao: \n1 - Listar alunos \n2 - Adicionar novo aluno \n3 - Buscar aluno pelo nome \n4 - Mostrar quantos alunos passaram (nota >= 7) \n5 - Sair\n"));

while (opcoes !== "sair"){
    
    switch(alunos){
        case 1:
            alunos.array.forEach((item, i) => {
                console.log(`${i + 1} - ${item.nome} (R$ ${item.nota})`);
            });
            break;
        
        case 2:
            let novoAluno = {
                nome: prompt("\nNome aluno? \n"),
                nota: Number(prompt("\nNota aluno \n"))
            }
            
            alunos.push(novoAluno);
            console.log(`\n=== ${novoAluno.nome} adicionado na lista. ===\n`);
            break;
        
        case 3:
            
    }
}