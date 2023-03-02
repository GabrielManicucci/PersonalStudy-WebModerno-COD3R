// Módulo testando as diferentes formas de instanciar um módulo

// Método sem function factory, qualquer instancia diferente vai acessar o mesmo valor
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


// Método usando "function factory", dessa forma é possível criar variáveis com valores diferentes. 
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorD.inc()

console.log(contadorC.valor, contadorD.valor)




