// UMa função construtora serve como uma estrutura modelo que pode ser usada mais de uma vez 
// Métodos = funções 
// Possui métodos privados que não são alterados fora da função construtora
// possui métodos públicos com o uso do "this"

function Carro (velocidadeMáxima = 200, delta = 5) {
  // método privado
  let velocidadeAtual = 0

  // Método público
  this.acelerar = () => {
    let intervalo = setInterval(() => {
      if ( velocidadeAtual + delta <= velocidadeMáxima) {
        velocidadeAtual += delta
        console.log(velocidadeAtual)

      } else {
        console.log(`Você atingiu a velocidade máxima permitida de ${velocidadeAtual}Km/h`) 
        clearInterval(intervalo)
      } 
    }, 1000)
  }
}


console.log()
const ferrari =  new Carro(200, 25)

ferrari.acelerar()



