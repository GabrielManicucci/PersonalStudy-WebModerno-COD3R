// Função de async e await é tornar um código que é assíncrono (usando promisses), em um código mais parecido com a forma síncrona

const { error } = require("console")
const http = require("http")

const getData = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise( (resolve, reject) => {
    http.get(url, res => {
      let resultado = ""
  
      res.on("data", dados => {
        resultado += dados
      })
  
      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado))
        } catch(e) {
           reject(e)
        }
      })
    })
  }) 
}

nomes = []

async function obterAlunos() {
  let turmaA = await getData('A')
  let turmaB = await getData('B')
  let turmaC = await getData('C')

  return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto Asyncfunction

obterAlunos()
  .then(alunos => {
    nomes = alunos.map(aluno => aluno.nome)
    console.log(nomes)
  })
  .catch( error => console.log(error.message))



