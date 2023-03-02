// Objeto é uma junçaõ chave valor

// Formas de se criar um objeto

// 1) Mais usual
const pessoa = {
  nome: "Débora",
  lastName: "Manicucci",
  age: 12
}

// 02) Instanciar um objeto
const pessoa2 = new Object
pessoa2.name = "Gabriel"
pessoa2.lastName = "Manicucci"

console.log(pessoa2)

// 03) Função factory 

const funFactory = (nome, preco) => {
  return {
    nome,
    preco
  }
}

const iphone = funFactory("Iphone 14", 4.999)
console.log(iphone)

// 04) Função construtora




// 05) Classes




// 06) TRansformar JSON em objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)