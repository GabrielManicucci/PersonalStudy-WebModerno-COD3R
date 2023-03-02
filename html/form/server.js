// express é um framework que possibiblita que aconteça toda a comnucação de informações entre client-side e server-side de uma maneira mais eficiente e fácil, concentrando diversas funções como o uso de métodos que representam os verbos HTTP
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080

// "bodyParser" faz uma parser(analise) das informações vindas da req e transforma em um objeto body para poder ser lido no server-side
app.use(bodyParser.urlencoded( {extended:true} ))

app.post('/usuarios', (req, resp) => {
  console.log(req.body)

  resp.send('<h1>Parabéns. Usuário incluído</H1>')
})

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id)
  console.log(req.body)

  resp.send('<h1>Parabéns. Usuário alterado</H1>')
})

app.listen(port, () => console.log(`App running at http://localhost:${port}/usuarios`))