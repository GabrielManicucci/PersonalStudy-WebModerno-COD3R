// Forma utilizada para criar valores padrões caso alguma funionalidade não seja executada, ou seja se determinada ocasião não acontecer, continua com o valor padrão

// Nesse caso os valores padrões são passados no parametro da função
function parametroPadrao(a = 1, b = 1, c = 1) {
  return a + b + c 
}

console.log(parametroPadrao(), parametroPadrao(5))