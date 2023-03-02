const pessoa = {
  nome: "Gabriel",
  idade: 19,
  endereço: "rua xnove",
}

// Forma básica de utilizar valores de um objeto
// const nome = pessoa.nome
// const idade = pessoa.idade

// console.log(nome , idade)

// Ou usando o destructing
const {nome , idade, endereço} = pessoa 
console.log(nome, idade, endereço)