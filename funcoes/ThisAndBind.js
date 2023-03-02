const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao)
  }
}

// bind = ligar
// retorna a função chamada, porém ligada ao contexto que lhe foi passado

const falar = pessoa.falar.bind(pessoa)
pessoa.falar()

// const falar = pessoa.falar
// falar()
