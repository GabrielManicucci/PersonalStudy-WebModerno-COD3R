// Porta
const porta = 3003

// Framework express
const express = require('express')
const app = express()
// biblioteca BodyParser
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))


// CRUD = AS QUATRO OPERAÇÕES DE UMA API, Create, ready, Udptate e Delete (GET, POST, PUT E DELETE)

app.get( '/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
}) 

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)

})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.excluirProduto(req.params.id))
})


app.listen( porta, () => { console.log(`Servidor executando na porta ${porta}`)})