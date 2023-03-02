// Conceito de objeto constante


// Método "freeze" congela o objeto, transformando-o em uma constante onde seus atributos não podem ser alterados
const pessoa = Object.freeze({ nome: 'Gabriel' }) 
pessoa.nome = 'Débora'
console.log(pessoa)









