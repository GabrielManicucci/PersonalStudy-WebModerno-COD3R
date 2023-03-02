// A function Factory serve, no node.js, para criar instancias diferentes ao importar um módulo
// Para criar nova instancias em outro módulo, usa-se function factory

module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }

}