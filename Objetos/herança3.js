const pai = { nome: 'Fernando', lastName: 'Manicucci', corCabelo: 'preto'}

// "Object.create" faz a mesma coisa que a função deifneProperty no módulo FuncoesImportantes.js
const filho1 = Object.create(pai)
filho1.nome = 'Gabriel'
console.log(filho1.nome)

const filho2 = Object.create(pai, {
  nome: { value: 'Débora', writable: false, enumerable: true},
  lastName: { value: "Manicucci", writable: false, enumerable: true}
})

console.log( `${filho2.nome} ${filho2.lastName} tem o cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

// Igual estrutura de um if porém com operadores diferentes
for (let key in filho2) {
  filho2.hasOwnProperty(key) ?
  console.log(key) : console.log(`Por herança: ${key}`)
  
  /* for (let key in filho2) {
  if (filho2.hasOwnProperty(key)) {
    console.log(key)
  } else {
    console.log( `Por herança: ${key} `)
  }
} */
}



