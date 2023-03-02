// Node faz cache 
// Método normal, porém sem uma function factory, uma possível instancia em outro arquivo sempre vai carregar o mesmo valor, não podendo fazer uma nova instancia com valor diferente.


module.exports = {
  valor: 1,
  inc() {
    this.valor++
  }
}