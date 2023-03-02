// "for e in" é usado como uma das formas de percorrer um Array ou Objeto, porém esse metódo faz mais sentido quando usado para percorrer um objeto

const notas = [6.5, 7.7, 8.5, 9.7]

for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  name: "Gabriel",
  lastName: "Manicucci",
  age: 19,
  weight: 84
}

for (let atributo in pessoa) {
  console.log(`${atributo} ${pessoa[atributo]}` )
}