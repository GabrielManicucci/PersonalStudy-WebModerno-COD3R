// const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// const axios = require('axios')

// // Qual a mulher chinesa com menor salário ?

// const chineses = f => f.pais === 'China'
// const mulheres = f => f.genero === 'M'
// const menorSalario = (func, funcAtual) => {
//   return func.salario < funcAtual.salario ? func : funcAtual


//   // if ( func.salario < funcAtual.salario ) {
//   //   return func
//   // } else {
//   //   return funcAtual
//   // }
// }


// axios.get(url).then( response => {
//   const funcionarios = response.data
//   //console.log(funcionarios)

//   const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
//   // // const func = funcionarios.reduce(menorSalario)
//   console.log(func)
// })




const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')


// Qual a mulher chinesa com menos salário da lista ?

const chineses = f => f.pais === 'China'
const sexoFemnino = f => f.genero === 'M'
const menorSalario = (funAcumulador, funAtual) => {
  return funAcumulador.salario < funAtual.salario ? funAcumulador : funAtual
}


axios.get(url).then( res => {
  funcionarios = res.data
  // console.log(funcionarios)

  const mulherChinesaMenorSalario = funcionarios.filter(chineses).filter(sexoFemnino).reduce(menorSalario)
  console.log(mulherChinesaMenorSalario)


})