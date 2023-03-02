// Simulando um forEach

// Usa-se o protorype para criar um método 


Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Gabriel', 'Marcos', 'Ana', 'Bia']

aprovados.forEach2( (nome, indice) => {
  console.log(`${indice + 1}. ${nome}`)
})






