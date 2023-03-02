// "this" dentro de um módulo do NODE aponta para "module.exports"

console.log( this === module )
console.log( this === module.exports )
console.log( this === exports )


// Dewntro de uma função o "this" aponta para o objeto global, portanto tudo que for criado, em uma function, com this estará disponível no global
function logThis() {
  console.log('Dentro de uma função')
  console.log( this === module.exports ) // false
  console.log( this === global ) // true

  // Está no global
  this.perigo = '...'
}

logThis()



/* this in arrow functions 
 - this aponta para "module.exports" dentro de uma arrow function

*/

const arrowFunction = () => {

  console.log( this === global ) // false
  console.log( this === exports ) // true
  console.log( this === module.exports ) // true
}

arrowFunction()