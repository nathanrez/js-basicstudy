// Comando Basico
let data = new Date();
//console.log(data); // Retorna data atual

//retorna ano atual
let ano = data.getFullYear();
//console.log(ano); 

// retorna o mes atual
let mes = data.getMonth();
//console.log(mes); // retorna com numeros de 0 ate 11, sendo janeiro como 0. Como se fosse um array.
const mesDoAno = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesDoAno[data.getMonth()];
//console.log(mesEscrito); // Mostra o mes de forma escrita.

// Pegar dia do mes - 1 ate 31
let diaMes = data.getDate();
console.log(diaMes); // mostra o dia

// Pegar dia da semana
let diaSemana = data.getDay;
const diaSemanaEscrito = ["Domingo","Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];

let resultDiaSemana = diaSemanaEscrito[data.getDay()];
console.log(resultDiaSemana);

let dataBR = data.toLocaleDateString('pt-BR');
console.log(dataBR);

let hoje = new Date()
let vencimento = new Date(2025, 11, 12);

if(hoje > vencimento){
    console.log("Sua conta esta vencida");
}
else {
    console.log("Sua conta ainda nao vencer.");
}

// Diferenca entre 2 dadas em dias

let dataInicial = new Date();
let dataFinal = new Date(2025, 11, 31);

let diferencaTempo = dataFinal.getTime(); - dataInicial.getTime();//getTime serve para pegar o tempo em milisegundos para fazer a conta melhor

let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias);