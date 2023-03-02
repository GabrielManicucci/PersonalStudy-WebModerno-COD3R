// Estrutura de controle condicional: "If" (se)

//Função que retorna, conforme a nota, se o aluno foi ou não aprovado
function resultadoDoBoletim (nota) {
  if (nota >= 6 ) {
    console.log("Aluno aprovado " + nota)
  } else {
    console.log("Aluno reprovado " + nota)
  }
}

resultadoDoBoletim(5.9)