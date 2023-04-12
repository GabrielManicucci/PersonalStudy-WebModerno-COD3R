const http = require("http")

// Pegar os dados de um json através de uma requisição

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
  } ) 
}

// let alunos = []
let nomes = []

// Promise.all( [getData('A'), getData('B'), getData('C')] )
//     .then( turmas => {
//       turmas.forEach(turma => {
//         turma.forEach( aluno => {
//           nomes.push(aluno.nome)
//         })
//         console.log(nomes)
//       });
//     })

Promise.all( [getData('A'), getData('B'), getData('C')] )
    .then( turmas => [].concat(...turmas) )
    .then( alunos => {
      nomes = alunos.map( aluno => aluno.nome)
      console.log(nomes)
    })
    .catch(e => console.log(e.message))
    .finally( () => console.log('promisses executadas'))
   

    
