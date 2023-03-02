// IIFE = Imediately invoked function expression 
// Tem como objetivo fugir do escopo global 

( function () {
  console.log('Será executado na hora')
  console.log('Fora do escopo mais abrangente ou global')
}) ()