for (let i = 0; i <= 10 ; i++){
    console.log(i);
}

const carros = ["Astra", "Chevette", "Civic", "Monza", "Gol", "X3"];
let tamanho = carros.length;

for(let i = 0; i < tamanho; i++){
    console.log(carros[i]);
}

// ex1 
for(let i = 0; i <= 20; i+= 2) {
    console.log(i);
}

// ex2
const numeros = [3, 7, 2, 10];
let total = 0;

for(let i = 0; i < numeros.length; i++){
    total = total + numeros[i];
}

console.log("Soma total do array = ", total);

// ex3
for(i = 10; i >= 0; i--){
    console.log(i);
}



// ex4
const nomes = ["Augusto","Joao","Ana", "clara", "vitor", "antonio"];

for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i];

    if (nome.toLowerCase().startsWith("a")) {
        console.log(nome);
    }
}

//ex5
const palavras = ["carro", "casa", "abacaxi", "computador", "areia", "sol", "arroz"];

for(let i = 0; i < palavras.length; i++){
    let palavra = palavras[i];
    let letras = palavra.length;

    if(letras > 5){
        console.log(palavra);
    }
}

//ex6
const num = [1, 22, 34, 13, 21, 27, 38];

for(i = 0; i < num.length; i++){
    let valida = num[i]

    if(valida % 2 === 0){
        console.log(valida);
    }
}

//ex7
const idades = [12, 25, 8, 19, 42, 17, 30];

for(i = 0; i < idades.length; i++){
    let  validaIdade = idades[i];

    if(validaIdade >= 18){
        console.log("é maior de idade");
    }
}

//ex8 
const number = [3, 10, 7, 22, 14, 9, 6, 1];
const contador = 0;

for(i = 0; i < number.length; i++){
    let validar = number[i];
    
    if(validar % 2 == 0){
        contador = contador + 1;
    }
}

console.log(contador);