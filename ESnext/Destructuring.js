// Uma maneira mais fácil de atribuir valores e atributos de array e objetos à variáveis


// in Array
const [x, y] = [1, 2]
console.log(x + y)

// In Object
const person = {
  name: 'Gabriel',
  lastName: 'Manicucci',
  age: 20
}

const {name, lastName, age} = person
console.log(`my name is ${name} and i'm ${age} years old`)