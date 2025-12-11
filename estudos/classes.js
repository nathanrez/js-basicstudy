class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo+"buzinou";
    }
}

const uno = new Carro("fiat", "uno", 2001);
const astra = new Carro("Opel", "Astra", 1995);

console.log(uno);
console.log(astra.buzina());
