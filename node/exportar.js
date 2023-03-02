// "module.exports" é o modo padrão para exportar
// "this" e "exports" só servem para fazer referência ao "moduel.exports" quando estiver utizilando os dados no arquivo
// "this" e "exports" tbm exportam, porém precisam ser refernciados com nome. Ex: this.objeto = new Object()
// "module.exports" é uma const do node.js, ao exportar usando diretamente o "module.exports", qualquer outra tentativa de exportar será ignorada. Ex: module.exports = 'export'

const { ateLogo } = require("./moduloA")

// console.log(ateLogo)


console.log(exports === this)
console.log(module.exports === this)
console.log(module.exports === exports)


this.a = 1
this.b = 2
this.c = 3
this.object =  { nome: 'gabriel'}

module.exports.objGabriel = {
  nome: 'Gabriel',
  lastName: "Manicucci",
  age: 20
}

// module.exports = {
//   nome: 'Gabriel',
//   lastName: "Manicucci",
//   age: 20
// }

// exports = {
//   nome: 'teste'
// }

// console.log(module.exports)

// module.exports.object = { nome: 'gabriel'}


// let a = 1
// let b = 2
// let c = 3
// let objeto = { nome: 'gabriel'}

// module.exports = [a, b, c, objeto]
