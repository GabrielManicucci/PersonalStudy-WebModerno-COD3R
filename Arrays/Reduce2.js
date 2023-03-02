
const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true},

]

// Mapear apenas os atributos "Bolsistas" em um array
const arrayOnlyBolsitas = alunos.map( a => a.bolsista)
console.log(arrayOnlyBolsitas)


const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const algumBolsistas = (resultado, bolsista) => resultado || bolsista


const resultado = arrayOnlyBolsitas.reduce(todosBolsistas)
console.log(resultado)

const resultado2 = arrayOnlyBolsitas.reduce(algumBolsistas)
console.log(resultado2)




// let arrayOnlyBolsitas = alunos.map( e => e.bolsista )
// console.log(arrayOnlyBolsitas)



// const resultado = arrayOnlyBolsitas.reduce( function (acumulador, atual) {
//   if ( acumulador === true || atual === true ) {
//     console.log('Um dos alunos é bolsista')
//     return true
//   } else {
//     console.log('Um dos alunos não é bolsista')
//     return false
//   }

// })



//console.log(resultado)




// const resultado = arrayOnlyBolsitas.reduce( function (acumulador, atual) {
//   if ( acumulador === true && atual === true ) {
//     console.log('Todos os alunos são bolsitas')
//     return true
//   } else {
//     console.log('Um dos alunos não é bolsista')
//     return false
//   }

// })