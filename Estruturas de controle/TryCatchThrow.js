// "try, catch, Throw" são operadores usados para tratamento de erro

function tratarErroELançar(error) {
  throw {
    name: error.name,
    msg: error.message,
    date: new Date
  }
}

function imprimirUpppercase (obj) {
  // "tentar", funcão de execução 
  try { 
    console.log(obj.name.toUpperCase() + "!!!")
  } 
  // "lançar, função de tratar erro"
  catch (error) {
    tratarErroELançar(error)
  } 
  // resposta de conclusão
  finally {
    console.log("final!")
  }
}

const obj = { name: "Gabriel"}
imprimirUpppercase(obj)