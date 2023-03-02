// Funções importantes para lidar com objetos (modificações)



// Object.preventExtensions (evita extensões)  - Permite excluir e alterar objetos, mas não permite adicionar mais atributos

const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// const produto2 = { nome: 'Iphone 14', preco: 4.999, tag: 'promoção'}
// Object.preventExtensions(produto2)

// console.log("Extensível:", Object.isExtensible(produto2))


produto.nome = "Lápis"
produto.descricao = 'Lápis de cor'
delete produto.tag
console.log(produto)

// Object.seal (selar) - permite somente modificar os atributos, e não permite adicionar novos atributos nem apaga-los

const person = { nome: 'Gabriel', lastname: "Manicucci", Age: 19 }

Object.seal(person)
console.log('Selado:', Object.isSealed(person))


person.nome = 'Débora'
person.cpf = 70883875497
delete person.Age

console.log(person)

// Object.freeze (congelar) - congela o objeto em todos os sentidos, não adiciona, não altera e nem exclui