
/* Exemplo1
 - Função simulando um forEach 

 - Função sem receber parâmetro que percorre um array, acessando o array de forma direta no "if" 

*/

const dates = [ '12/09', '25/09', '11/11', '13/11']

function happyBirthday1 () {
  for (let i = 0; i < dates.length; i++) {
    if ( dates[0] === dates[i]) {
      console.log( `${dates[0]}: Niver da Débora` )
  
    } else if ( dates[1] === dates[i] ) {
      console.log( `${dates[1]}: Niver do Fernando` )
      
    } else if ( dates[2] === dates[i]) {
      console.log( `${dates[2]}: Meu niver` )
  
    } else if ( dates[3] === dates[i]) {
      console.log( `${dates[3]}: Niver da mãe` )
  
    } else {
      console.log( 'lista completa')
    }
  }
}

happyBirthday1()


// Exemplo2

/* Conceitos importantes usado no prox exercício
 - escopo: é possível acessar, dentro de um "if" que está deontro de um function, arrays e obj que fazem parte do contexto léxico que foram criados, portanto não precisa passar como parametro

 - Índice pode ser usado para acessar dois arrays ao mesmo tempo

 - Dois arrays criados para diminuir código e acessa-los no "if" da function

*/

const nivers = ["Débora", "Fernando", "Eu", "Mãe"];
const datasAniversario = [ '12/09', '25/09', '11/11', '13/11'];

function happyBirthday2 (data, indice) {
    /*for (let index = 0; index < dates.length; index++)*/ {
    if (data === datasAniversario[indice]) {
        console.log(`${data}: Niver de ${nivers[indice]}`);
    } else {
      console.log('Lista Completa');
    }
  }
}

datasAniversario.forEach(happyBirthday2)

