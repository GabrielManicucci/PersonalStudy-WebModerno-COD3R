// Passando parâmetros entre módulos
// Criando Função que recebe um array nomes que vão srer passados em outro módulo

const func = function (...nomes) {
  return nomes.map(  nome => `Bons estudos ${nome}`)
}

module.exports = func

// console.log(func('Gabriel', 'João', 'Clara'))