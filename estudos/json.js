//JSON.parse() -> Converte o texto no padrao JSON em objetos
//JSON.stringify() -> Converte objetos em texto padrao JSON

const carro = { // Sendo esse o objeto carro
    marca: "Opel",
    modelo: "Astra",
    ano: 1995
}

// console.log(carro) <- ele ira printar [object] [object], pois nao e possivel ler um objeto, para isso se usa o json.

let texto = JSON.stringify(carro); // <- converte o objeto para texo e ai se torna visivel no console.log
console.log(carro);

let objeto = JSON.parse(texto); // pega o texto e converte em objeto
console.log(objeto.modelo); // apos converter o texto para obj, ele pode buscar APENAS 1 valor, sendo ele o modelo.

const carro2 = {
    marca: "Honda",
    modelo: "Civic",
    motor: ["1.5", "1.6", "2.0"]
}

let obj = JSON.stringify(carro2);  // vira string
let txt = JSON.parse(obj);         // vira objeto de volta

console.log(txt.motor[2]); // AGORA SIM

// =======

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json');

ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText;
    let obj2 = JSON.parse(this.responseText);
    alert(obj2.ddd);
}

// =======

