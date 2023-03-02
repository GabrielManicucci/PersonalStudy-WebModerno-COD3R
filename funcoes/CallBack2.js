// Mais um exemplo de callback usando o método "filter", que cria uma cópia da array definida conforme a função passada como parametro, ou seja, é uma função disparada ao percorrer cada elemento do array

const notas = [5.5, 6.6, 7.7, 8.8, 9.9]

// forma antiga
let notasBaixas1 = []
for (let i in notas) {
  if ( notas[i] < 7) {
    console.log(notasBaixas1.push(notas[i]))
  }
}

console.log(notasBaixas1)

// forma atualizada usando arrow function 
const notasBaixas2 = notas.filter( nota => nota < 7)

console.log(notasBaixas2)