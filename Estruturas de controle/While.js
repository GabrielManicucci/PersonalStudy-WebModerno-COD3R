// While(enquanto) é uma estrutura de controle usadada quando a necessidade for criar loops com quantidades indeterminadas de repetições 

function getValorInteiroAleatorioEntre (max, min) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

// Só sai do laço quando a expressão for falsa
while (opcao != -1) {
  opcao = getValorInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}`)
}

console.log("Até a próxima!")