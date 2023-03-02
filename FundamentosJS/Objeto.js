// Objeto é uma junção chave-valor onde um valor objeto pode receber propriedades como nome, preço... 

// pode ser escrito de duas fromas 

// PRIEMIRA
const produto1 = {}
produto1.nome = 'Galaxy 30s plus'
produto1.preco = 4987.90
 
console.log(produto1)

// SEGUNDA
const produto2 = {
  nome: 'Calça de moletom',
  preco: 89.90
}

// Usando a "notação ponto" para tirar o valor de um objeto e atribuir a uma variável
const nome = produto2.nome

console.log(nome)