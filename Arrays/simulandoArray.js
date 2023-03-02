// simulação de Array com Objeto, criando um método dentro do objeto que ao ser chamado retorna os valores do objeto em um array

const lastNames = { 0: "manicucci", 1: 'Lima', 2:'Lopes', 3:'Guedes'}

Object.defineProperty(lastNames, 'toString', {
  enumerable: false,
  writable: false,
  value: function () { return Object.values(this) }
})

console.log(lastNames.toString())
