// Ler um arquivo.txt usando promisses, ou seja o resultado da promisse ao usar o método then deverá ser o conteúdo do arquivo

const { error } = require('console')
const fs = require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')

const diretorio = __dirname + "/dados.txt"
const diretorioJson = __dirname + "/arquivo.json"
// console.log(diretorioJson)

const getData = caminho => {
  return new Promise ( (resolve, reject) => {
    fs.readFile(caminho, 'utf-8', (err, data) => {
      try {
        resolve(data)

      } catch(err) {
        reject(err)
      }
    } )
  })
}

getData(diretorioJson)
    .then( json => JSON.parse(json))
    .then( objeto => objeto.db)
    .then( objeto => console.log(`Usuário ${objeto.user} da porta ${objeto.port} foi recebido com sucesso`))
    .catch( error => console.log(error))

getData(diretorio)
    .then ( string => console.log(string))


 

