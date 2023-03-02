// É uma junção colchete-valor denominado por uma constante, onde pode ser usado masi de uma valor
const valores = [10, 5, 7, 9]

// imprimir valores pelo seu índice no console
console.log(valores[0], valores[3])

// adiciona valores a lista
valores[4] = "Gabriel"
//console.log(valores)

// ou para também adicionar valores
valores.push(30)
console.log(valores)

// Apagar valores das listas
valores.pop()
console.log(valores)

// adiciona valores em primeiro da lista
valores.unshift('Débora');
console.log(valores)

// número do índice do valor da lista
console.log(valores.indexOf('Gabriel'))

// comprimento da lista
console.log(valores.length)
