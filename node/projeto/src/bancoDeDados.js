// Funções utiliazadas na construção da API REST (CRUD)
// Simulação de um banco de dados, salvando os dados em um objeto "produtos"

const sequence = {
  _id: 1,
  get id() { return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

function getProduto(id) {
  return produtos[id] || {}
}

function getProdutos() {
  return Object.values(produtos)
}

function excluirProduto(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}



// produto1 = salvarProduto({ nome: 'Iphone', preco: 3299.99})
// produto2 = salvarProduto({ nome: 'Iphone12', preco: 3899.99})
// produto3 = salvarProduto({ nome: 'Iphone13', preco: 4899.99})
// //console.log(produto1)
//console.log(produtos)
//console.log(getProdutos())


module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}