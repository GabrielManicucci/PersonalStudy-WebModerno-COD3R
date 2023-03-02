// FUNÇÕES IMPORTANTES PARA LIDAR COM OBJETOS

const pessoa = {
  nome: 'Gabriel',
  idade: 19,
  peso: 84
}

// função que acessa somente as chaves do objeto
console.log(Object.keys(pessoa))
// função que acessa somente os valores do objeto
console.log(Object.values(pessoa))
// função que acessa tanto chave quanto valor, ou seja, as entradas do objeto e retorna um array para cada chave e valor, sendo 0 e 1.
console.log(Object.entries(pessoa))



// Modo de percorrer os arrays acessados pela função object e poder manipular, como passar retirar do array mostrando no console
Object.entries(pessoa).forEach( ([chave, valor]) => {
  console.log( `${chave}: ${valor}  `)
})



// Modo que define chave e valor para um objeto, contudo tem a possibilidade de criar algumas propriedaes
Object.defineProperty(pessoa, 'dataNascimento', {

  enumerable: true, // deixa a chave acessível e vísivel 
  writable: false,
  value: '27/09/2022'
})

console.log(pessoa)

pessoa.dataNascimento = '28/09/2022'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))



// Object.assign (ECMAScript 2015), é uma forma de concatenar atributos de objetos em um só e poder sobesrever valores

// const dest = { a: 1}
// const o1 = { b: 2}
// const o2 = { c: 3, a: 4}
// const obj = Object.assign( dest, o1, o2)
// console.log(obj)