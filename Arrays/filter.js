// Cria um subarray 
// Utilizado para percorrer lista de objetos e criar um subarray de acordo com as propriedades de cada objeto
// "filtrar"

const produtos = [
  { nome: 'lápis', preco: 2.90, fragil: false },
  { nome: 'borracha', preco: 51.90, fragil: false },
  { nome: 'copo de vidro', preco: 8.90, fragil: true },
  { nome: 'espelho', preco: 50.90, fragil: true },
  { nome: 'celular', preco: 500.90, fragil: true },
  
]

const fragil = p => p.fragil
const preco = p => p.preco
const caro = p => p.preco > 50.00
let resultado = produtos.filter(fragil).filter(caro)
let resultado2 = produtos.filter(caro).filter(fragil)



console.log( resultado2 )





