
// Criar uma função de forma literal
function fun1() {}

// Armazenar função em uma variável
const fun2 = function () {}

// Armazenar em um Array
const array = [function (a,b) {
  return (a + b)}, fun1, fun2]
console.log(array[0](2,3))


// Armazenar em um atributo de objeto
const object = {}
object.falar = function () {return 'opa'}
console.log(object.falar())


// Passar função como parâmetro 
function run(fun) {
  fun()
}

run(function () { console.log('executando...')})

// uma função pode retornar uma função 
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)