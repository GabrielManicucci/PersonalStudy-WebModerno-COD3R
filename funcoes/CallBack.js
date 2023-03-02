// Funções "CallBack" do inglês chamar de volta, são funções que são disparadas quando determinado evento acontece

const fabricantes = ["Mercedes", "BMW", "Audi"]

function imprimir (nome, inidice) {
  console.log( `${inidice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
// ou
fabricantes.forEach( (fabricante, inidice) => console.log(`${inidice + 1}. ${fabricante}`))