// Formas de ler arquivos em NODE.JS

const { error } = require('console')
const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // "__dirname" = diretório atual

// De forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)



// De forma assíncrona (forma mais recomendada)
fs.readFile( caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const content = require('./arquivo.json')
console.log(content)

// ler uma pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdos da pasta atual "node"...')
  console.log(arquivos)
})




