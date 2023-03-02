const alunos = [
  {nome: 'Gabriel', nota: 8.9, bolsista: false},
  {nome: 'Débora', nota: 6.9, bolsista: true},
]


// Código imperativo - se preocupa mais em como o código vai ser escrito
let total = 0

for (let i= 0; i < alunos.length; i++) {
  total += alunos[i].nota
}

console.log( total)
console.log( total / alunos.length ) 



// Código declarativo - preocupa-se mais com o resultado do código ao invés de se preocupar com o "como" 
const getNota = a => a.nota
const somaNota = ( resultado, nota ) => resultado + nota

const resultadoSoma = alunos.map(getNota).reduce(somaNota)

console.log(resultadoSoma)
console.log( resultadoSoma / alunos.length)

