//ex 1
let user = "renato123";
let password = "abacaxiSalgado_";

let askUser = prompt("Digite o usuario: ");
let askPass = prompt("Digite a senha: ");

if(askUser == user && askPass == password){
    console.log("Sucesso!");
}
else if(askUser == user && askPass !== password){
    console.log("Senha incorreta.");
}
else if(askUser !== user && askPass == password){
    console.log("Usuario incorreto.");
}
else{
    console.log("Dados incorretos. Tente novamente");
}

// ex 2 

let num1 = Number(prompt("Digite o primeiro numero"));
let num2 = Number(prompt("Digite o segundo numero"));
let operacao = prompt("Qual operacao? (soma, subtracao, multiplicacao, divisao)");

if(operacao == "soma"){
    let resultado = num1 + num2;
    console.log(resultado);
}
else if(operacao == "subtracao"){
    let resultado = num1 - num2;
    console.log(resultado);
}
else if(operacao == "multiplicacao"){
    let resultado = num1 * num2;
    console.log(resultado);
}
else if(operacao == "divisao"){
    let resultado = num1 / num2;
    console.log(resultado);
}
else {
    console.log("digite uma operacao valida. (soma, subtracao, multiplicacao, divisao)");
}