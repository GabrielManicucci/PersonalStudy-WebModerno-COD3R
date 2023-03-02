// Encapsulamento, é uma forma de deixar os atributos de um objeto mais dificeis de serem alterados conforme alguma validação

const sequencia = {
  _valor: 1, // Convenção, indica que é um atributo privado

  get valor() { return this._valor++ },
  set valor(valor) { 
    if ( valor > this._valor ) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)


