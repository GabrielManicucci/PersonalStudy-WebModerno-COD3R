// Modos de exportar dados 
// Usar variáveis que guardam dados e tornam esses acessíveis para outros arquivos. 
// this === exports === module.exports


this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao Node'

// Froma principal 
module.exports.ateLogo = 'Até o próximo exemplo'

module.exports.object = {
  nome: 'gabriel'
}

console.log()
