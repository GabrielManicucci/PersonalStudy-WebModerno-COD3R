// como navegar entre pastas (diretórioa)

const moduloA = require('../../moduloA')

console.log(moduloA)

// Ao usar o padrão de nomear um arquivo conhecido como "index.js", não é necessário importar o diretório pelo arquivo, somente o nome da pasta já é reconhecido
const hellow2 = require('./pastaC')
console.log(hellow2.hellow2)



// Módulo http próprio do NODE
const http = require('http')

// console.log(http)

http.createServer( (req, res) => {
  res.write('Bom dia!')
  res.end()
} ).listen(8080)