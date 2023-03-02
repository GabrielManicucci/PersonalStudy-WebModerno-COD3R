Array.prototype.map2 = function (callBack) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callBack(this[i], i, this)
    )
  }

  return newArray

}

const numbers = [1, 2, 3, 4, 5]

let resultado = numbers.map2( e => e * 2)

console.log(resultado)