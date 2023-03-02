// Classe
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const gabriel = new Pessoa('Gabriel')
console.log(gabriel.falar())

// gabriel.falar()
// console.log(gabriel.nome)


// Função factory
const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const debora = criarPessoa('Débora')
console.log(debora)
// debora.falar()

function Pessoa2 (nome) {
  // método público, que pdoe ser acessado
  this.nome = nome

  this.falar = function falar () {
    console.log(`Meu nome é ${this.nome}`)
  }

}

const amanda = new Pessoa2('Amanda Costa')
//amanda.falar()
console.log(amanda)