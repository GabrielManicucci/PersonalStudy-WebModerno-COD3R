// 01) Função que recebe dois valores como parâmetros e executa soma, subtração, divisão e multiplicação desses números

function operacoesMatematicas( a, b ) {
  const soma = a + b
  const subtracao = a - b
  const multiplicacao = a * b
  const divisao = a / b
  console.log(soma, subtracao, multiplicacao, divisao)
}
operacoesMatematicas(20, 5)



// 02) Função que recebe valores dos lados de um triângulo e retorna se é isósceles, equilátero ou escaleno usando POO
function Triangulos(a, b, c) {
  this.ladoA = a
  this.ladoB = b
  this.ladoC = c

  this.type = () => {
    if (a === b && b === c && c === a) {
      return 'Triângulo equilátero'
    } else if ( a === b || b === c || c === a ) {
      return 'Triâmgulo isósceles'
    } else {
      return 'Triângulo escaleno'
    }
  }
}
const equilatero = new Triangulos(10, 10, 10)
const typeEquilatero = equilatero.type()
console.log(typeEquilatero)




// 03)  Função que recebe dividendo e divisor(fração) retorna o resultado(quociente) e o resto da divisão
function divisao(dividendo, divisor) {
  const quociente = dividendo / divisor
  const resto = (dividendo / divisor) - quociente
  console.log(quociente, resto)
}
divisao(7, 5)



// 04) Função que recebe um valor decimal em javscript com0 0.00000002 e retorna esse valor com duas casas decimais, cifrão do real e uma vírgula no lugar do ponto
function money(numero) {
  numero = numero.toFixed(2).replace('.', ',')
  console.log(`R$ ${numero}`)


}
money(0.30000000000000004)


// 05) Uma função que representa a equação dos juros e simples e outra para juros compostos
function jurosSimples (capital, taxa, tempo ) {
  const juros = capital * taxa * tempo
  const montante = capital + juros
  console.log(montante)
}
jurosSimples(100, 0.1, 10)

function jurosCompostos(capital, taxa, tempo) {
  const juros = (1 + taxa)** tempo
  const montante = capital * juros
  console.log(montante)
}
jurosCompostos(100, 0.1, 10)



// 06) Função que recebe um array com uma sequência de pontos de um jogador de basquete e retorne quantas vezes ele bateu seu recorte e o quando fez seu pior jogo

const pontos = [30, 40, 20, 4, 51, 25, 42, 38, 56, 60]

function avaliar(array) {
  // const arrayPontos = pontos.split(", ")
  let recordesquebrados = 0
  let piorJogo = 1
  let maiorPontuacao = pontos[0]
  let menorPontuacao = pontos[0]

  // for (let i = 1; i < pontos.length; i++) {
  //   if(pontos[i] > maiorPontuacao) {
  //     maiorPontuacao = pontos[i]
  //     recordesquebrados = recordesquebrados + 1
  //   } else if (pontos[i] < menorPontuacao) {
  //     menorPontuacao = pontos[i]
  //     piorJogo = i + 1
  //   }
  // }

  pontos.forEach( (ponto, indice) => {
    if(ponto > maiorPontuacao) {
      maiorPontuacao = ponto
      recordesquebrados = recordesquebrados + 1
    } else if (ponto < menorPontuacao) {
      menorPontuacao = ponto
      piorJogo = indice + 1
    }
  })
   
  return [recordesquebrados, piorJogo]
  
}
console.log(avaliar(pontos))



// 07) Função que recebe a nota de um aluno e de acordo com o sistema de aprovação de uma escola em que se a diferença entre o próximo múltiplo de 5 e a nota do aluno for menor que 3, e notas com menos de 40 pontos são reprovadas, com isso a função deverá arredondar a nota e aprovar o aluno, por exemplo se ele tiver com 38 pontos
function aprovar(nota) {
  let notaArredonda = arrendondar(nota)
  if (notaArredonda >= 40) {
    console.log(`Aprovado: ${notaArredonda}`)
  } else {
    console.log(`Reprovado: ${notaArredonda}`)
  }

}

function arrendondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5))
  } else {
    return nota
  }

}
aprovar(38)


// 08) function construtora que recebe a idade de uma pessoa em anos e sua expectativa de vida em anos e retorna tudo em dias e ainda cria uma função que retorna quantos dias de vida você ainda tem baseado na sua expectativa de vida

function Age( age, lifeExpectancy ) {
  this.lifeExpectancyDays = lifeExpectancy * 365
  this.ageinDays = age * 365
  this.daysToLive = this.lifeExpectancyDays - this.ageinDays
}

const gabriel = new Age(20, 80)
console.log(gabriel)


// 09) Função que recebe um número de 1 a 12 e retorna qual o mês do ano

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function monthsYear(numero) {
  --numero
  console.log(months[numero])
}

monthsYear(1)


// 10) Função que recebe um objeto como parâmetro e como segundo parâmetro a propriedade que será apagada do objeto, e retornar um novo objeto sem essa propriedade

const objeto = {a: 1, b: 2}

function removerPropriedade(objeto, nomePropriedade) {
  const copia = {...objeto}
  delete copia[nomePropriedade]

  return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "b"))
console.log(Object.is(removerPropriedade({a: 1, b: 2}, "b"), objeto))








