// Para importar módulos terceiros não é necessário utilizar o caminho "absoluto", somente o nome.
const _ = require('lodash')


setInterval( () => console.log(_.random(1, 10)), 1000 )