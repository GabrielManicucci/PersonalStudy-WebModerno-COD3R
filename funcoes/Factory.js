// A função factory(fábrica) tem o objetivo de criar uma estrtura modelo de objeto, para que ao invés de sempre criar um objeto da forma convencional, usa-se a função factory passando os valores do objeto como parametro

function criarProduto (nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto("Iphone 14", 4.999))

const criarObjetoProduto = (nome, preco) => {
  return {
   nome,
   preco,
   desconto: 0.1,
   valor () {
    return `${nome}: ${preco * ( 1 - this.desconto)}`
   }
  }
}
 
const iphone = criarObjetoProduto('Iphone 14', 4.999)
console.log(iphone.valor())

// const carro = criarObjetoProduto('Ferrari', 1000000, 0.1)
// console.log(carro.valor())