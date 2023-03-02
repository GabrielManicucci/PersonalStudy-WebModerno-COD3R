// Além dos métodos que se tem na biblioteca do javascript, nós também podemos crar métodos usando o conceito do "Prototype"



Array.prototype.first = function () {
  return this[0]
}

const array = [1,2,3,4]
console.log(array.first())











