
// Toda função aponta para function.prototype
function MeuObjeto () {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log( obj1.__proto__ === obj2.__proto__)
console.log( MeuObjeto.prototype === obj1.__proto__)


MeuObjeto.prototype.nome = 'Gabriel'
MeuObjeto.prototype.nacionalidade = 'Brasil'
MeuObjeto.prototype.falar = function () {
  console.log(`Good morning! My name is ${this.nome} and i'am from ${this.nacionalidade}`)
}

MeuObjeto.prototype.falar()
obj1.nacionalidade = 'England'
obj1.falar()

obj2.nome = 'Débora'
obj2.falar()



