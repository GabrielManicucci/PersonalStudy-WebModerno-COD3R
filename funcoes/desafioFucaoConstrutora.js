function FunConstrutora (nome) {
  this.nome = nome
  
  this.pessoa = () => {
    console.log(`Meu nome é ${this.nome}`)
  }
  
}

const joao = new FunConstrutora('João')

joao.pessoa()

const gabriel = new FunConstrutora('Gabriel')
gabriel.pessoa()
console.log(gabriel.nome)


