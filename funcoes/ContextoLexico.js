// Contexto léxico é o momento em que uma função foi definida, e a função carrega todas as informações desse contexto. 


const valor = 'Global'

function minhaFuncao () {
  console.log(valor)
}

// Como a "minhauncao" foi definida no momento de criação da variável valor que é global, ele carregará esse valor
function exec () {
  const valor = 'local'
  minhaFuncao()
}

exec()

