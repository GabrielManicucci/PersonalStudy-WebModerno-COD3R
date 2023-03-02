// Toda função possui um array interno chamado "arguments". que quando nenhum paramêtro é passado pela função. o array está vazio, mas pode ser preenchido ao passar parametros na chamada da função
function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma(2, 4, 6))