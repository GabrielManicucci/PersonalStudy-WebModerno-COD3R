// rest = juntar, spread = espalhar

// rest

function soma(...nambers) {
  let resultado = 0
  nambers.forEach(n => (resultado += n))
  return resultado
}

console.log(soma(1, 5, 7, 11))

//Spread with object

const workPerson = {name: 'Manicucci', salario: 12000}

const clone = {
  active: true, 
  ...workPerson
}
console.log(clone)

// Sprea with array

const myFamily = ['Fernando', 'Cinthia']

const family = ['Valéria', 'Kléber', ...myFamily]
console.log(family)


