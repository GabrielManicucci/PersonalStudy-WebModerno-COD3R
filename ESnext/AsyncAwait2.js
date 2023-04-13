/* Diferença entre usar Promises e seus métodos com async e await

- Diferença é que com async e await uma linha de código é executada após a outra
- Com promises é executado em paralelo 

*/

// Código Promises ------
function awaitFor(tempo = 2000) {
  return new Promise ( resolve => {
    setTimeout( () => resolve(10), tempo)
  } )
}

awaitFor()
    .then(() => console.log('Executando promise'))
    .then(() => console.log('Executando promise2'))

// -------------------------------


// Código Async e await 
async function retornarValorFast() {
  return 10
}

async function executar() {
  try {
    a = await retornarValorFast()
    console.log(a)
    console.log('Async/Await 1...')
    
    a = await retornarValorFast() + a
    console.log(a)
    console.log('Async/Await 2...')
    
    a = await retornarValorFast() + a
    console.log(a)
    console.log('Async/Await 3...')

    return 'Async function is OK!'

  } catch(err) {
    console.log(err.message)
  }
}

function toMake() {
  console.log('executar')
}
toMake()

// Usando async
async function execTrue() {
  const valor = await executar()
  console.log(valor)
}
execTrue()

// Usando Promise
// executar()
//     .then(console.log)


