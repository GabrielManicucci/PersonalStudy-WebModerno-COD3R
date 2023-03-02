// Cadeia de protótipos  (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C', attr2: 'b' /*conceito de shadowing (sombreamento) - atributo do objeto "attr2" do objeto filho está sobrescrevendo o "attr2" do objeto pai*/ }

// "__proto__" é a forma com que se define o prototype de um objeto e tbm como acessa prototype de um objeto filho

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)



// Objeto pai modelo que possui duas funções, uma que representa aceleração e outra que mostra o status 
const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais (delta) {
    if ( this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status () {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

// carro.aceleraMais()
// console.log(carro.status())

const ferrari = {
  modelo: 'Ferrari 408 Itália',
  velMax: 324,
  status() {
    return `${this.modelo}: ${super.status()}`
    // O "super" funciona parececido com o "this", ele faz refrência a funções de objetos pai
  }
}

// função que serve para determinar a relação entre objeto e seu protótipo
Object.setPrototypeOf( ferrari, carro )
ferrari.aceleraMais(300)
console.log(ferrari.status())
