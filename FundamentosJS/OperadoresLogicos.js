/* Operadores lógicos

 - "Ou" = ||
 - "E" = &&
*/


// Ex que representa a entrada em um brinquedo no parque de diversão, em que só poderá entrar maiores de 14 anos e quem tiver mais de 1.50m

function entrada (idade, altura) {
  if (idade >= 14 || altura >= 1.5) {
    console.log(`Entrada permitida`)
  } else {
    console.log(` Sua entrada não está permitida devido a idade:${idade} ou altura: ${altura}`)
  }
}

entrada(13, 1.55)