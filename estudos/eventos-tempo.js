// setTimeOut -> Executa uma função após esperar um numero especificado de milisegundos.
// setInterval -> Igual ao setTimeOut, porém repete a execução da função continuamente.

let tempo = 0;
let user = prompt("Digite Ok para contar");

function ativarContagem(){
    if(user == "ok"){
        tempoVar = setTimeout(function(){
            tempo = 5;
            console.log(`contou ate ${tempo} segundos`);
        }, 5000);
    }
}

function pararContagem(){
    clearTimeout(tempoVar); // <- para a contagem do setTimeout
}

// ========

let cronometro = 0;

function ativarContagem2(){
    setInterval(function(){
        cronometro = cronometro + 1; // agora sim atualiza
        console.log(cronometro);
    }, 1000);
}
