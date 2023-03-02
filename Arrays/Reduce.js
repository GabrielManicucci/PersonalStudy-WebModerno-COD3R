// "Reduce" é um método utilizado para fazer agregações

const alunos = [
  {nome: 'Gabriel', nota: 8.9, bolsista: false},
  {nome: 'Débora', nota: 6.9, bolsista: true},
  {nome: 'Fernando', nota: 5.9, bolsista: false},
  {nome: 'Nicolas', nota: 9.9, bolsista: true},

]


//let arrayNotas = alunos.map( a => a.nota )
//console.log(arrayNotas)

//let array2 = []
const notas = {}
//let notasSomadas = 0

let valorUnico = alunos.map( e => e.nota).reduce( (acumulador, atual) => {
  //console.log( acumulador, atual)
  return acumulador + atual

})

//notasSomadas = resultado
notas.valor = valorUnico

console.log(valorUnico)
console.log(notas)

 

