// Closure é o escopo criado quando uma função é declarada
// Dessa forma, a função sempre irá acessar as informações do seu escopo/contexto léxico


const x = 'Global' // escopo global

function fora() {
  const x = 'Local'
  function dentro() {
    // escopo dessa função é o local de dentro da função fora(), na qual ela está.Com isso, ela irá acessar o "x" de seu escopo, e não o global, declarado fora da função
    return x
  }

  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())