// const preco = 10
// const desc = 0.10

function getPreco ( imposto = 0, moeda = 'R$') {
  return `${moeda} ${ preco * ( 1 - desc) * ( 1 + imposto )}`
}


// global.preco = 100
// global.desc = 0.10
// console.log(getPreco())

// console.log(getPreco(0.20))

const produto = {
  nome: 'Iphone',
  preco: 4.999,
  desc: 0,
  getPreco
}

console.log(produto.getPreco())
// console.log(getPreco.call(produto, 0.05))

// const carro = { preco: 5.999, desc: 0.10}
// console.log(getPreco.call(carro, 0.20 ))
// console.log(getPreco.apply(carro, [0.20] ))

 
