// Switch é uma estrutura de controle condicional assim como o "if e else"

const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10: case 9:
      console.log("Quadro de honra")
      break
    case 8: case 7:
      console.log("Aprovado " + Math.floor(nota))
      break
    case 6: case 5: case 4:
      console.log("Recuperação")
      break
    case 3: case 2: case 1: case 0:
      console.log("Reprovado")
      break
    default:
      console.log("nota inválida")
  }
}

imprimirResultado(8.4)