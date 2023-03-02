// FUNÇÃO SEM RETORNO
function soma(a, b) {
  console.log(a + b)
}

soma(2, 3)
// FUNÇÃO QUE RETORNA UM VALOR
function sumValue(c, d = 1) {
  return c + d;
}

console.log(sumValue(10))

//ARMAZENANDO FUNÇÃO EM UMA VARIÁVEL
const varFunction = function (e, f) {
  return e + f;
}

console.log(varFunction("gabriel ", "manicucci"))

// FUNÇÃO ARROW
const functionArrow = (g, h) => {
  return g + h;
}

console.log(functionArrow(2, 1))

// RETORNO IMPLÍCITO (usado em funções que não possuem bloco de código)
const returnImp = (i, j) => i - j
console.log(returnImp(10, 5))


