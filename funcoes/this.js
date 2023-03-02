// "this" é usado para acesar uma determinada estrutura já criada, a fim de criar outras coisas com aquela determinada estrutura, como por exemplo, criar um objeto pessoa com determinados atributos e poder usar a mesma estrutura depois


const people = {
  name: "Gabriel",
  age: 19,
  sayNameAge() {
    console.log(`My name is ${this.name} and I have ${this.age} years`)
  }
}

//console.log(people)


//const sayNameAge = people.sayNameAge
people.sayNameAge()
// método call serve para adicionaar o contexto global para dentro do contexto da função
// sayNameAge.call(this)

// -------------------------------------------------------------



// MODO ESTRITO (STRICT)

// No contexto de modo estrito, funções e objetos, com o uso do "this", somente são acessados na forma de escopo local.

// Elimina erros silenciosos 
// evita erros e bugs
// Proíbe algumas sintaxes
// No brownser é preciso ativa-lo com "use strict"


// escopo global
let name = 'Débora'

// this acessando escopo local
function sayMyName() {
  name = 'Fernando'
  // escopo local
  console.log(this.name)
}

sayMyName()

// this não consegue acessar escopo global e retorna undefined
const user = {
  //name: 'Débora',
  sayMyName() {
    console.log(this.name)
  }
}

user.sayMyName()