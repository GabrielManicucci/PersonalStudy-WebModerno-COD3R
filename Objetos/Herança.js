// Objetos possuem herança e composição, a herança significa que um objeto pode carregar atributos de um objeto pai. 

// O conceito de objeto pai é chamado de prototype(protótipo), ou seja, um objeto filho possui um prototype(objeto pai)

// Um objeto em JS tem referência para o seu protótipo(prototype). que é o seu objeto pai, e essa é a forma como javaScript define herança

//Todo objeto criado possui um objeto pai que aponta para "Object.prototype"


const ferrari = {
  modelo: 'f40',
  velMax: 324
}

const volvo = {
  modelo: 'XC40',
  velMax: 200
}

console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)

const protoFerrari = ferrari.__proto__
const protoVolvo = volvo.__proto__

console.log( protoFerrari === protoVolvo)


console.log( Object.prototype.__proto__)