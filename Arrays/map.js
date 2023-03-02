// map é um método que cria um array baseado em outro array mas sem modificar o array anterior
// Array x possui o mesmo tamanho do array y

const numbers = [1, 2, 3, 4, 5]

let resultado = numbers.map( e => e * 2)

console.log(resultado)
console.log(numbers)




// let soma10 = e => e + 10
// let triplo = e => e * 3
// let money = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

// resultado = numbers.map(soma10).map(triplo).map(money)
// console.log(resultado)