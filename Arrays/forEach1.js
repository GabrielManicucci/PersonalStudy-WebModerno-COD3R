//Método que percorre um array: "forEach", utilizando callBack


//Exemplo1

// const aprovados = ['Gabriel', 'Marcos', 'Ana', 'Bia']

// aprovados.forEach( function (nome, indice) {
//   console.log( `${indice + 1}. ${nome}`)
// })


// Exemplo2

const dates = [ '12/09', '25/09', '11/11', '13/11']


function happyBirthday (data, indice) {
  if ( data === dates[0]) {
    console.log( `${data}: Niver da Débora` )

  } else if ( data === dates[1] ) {
    console.log( `${data}: Niver do Fernando` )
    
  } else if ( data === dates[2]) {
    console.log( `${data}: Meu niver` )

  } else if ( data === dates[3]) {
    console.log( `${data}: Niver da mãe` )

  } else {
    console.log( 'lista completa')
  }
}


dates.forEach(happyBirthday)

// OU

// const manicucciFamily = ['Gabriel', 'Débora', 'Fernando', 'Fernando.F', 'Cinthia']

// const datesFamily = ['11/11', '12/07', '25/12', '25/07', '13/11']

// for (let i = 0; i <= manicucciFamily.length; i++) {
//   console.log(`${manicucciFamily[i]}: ${dates[i]}`)
// }





// Exemplo3
// const nomes = ['Gabriela', 'Lara', 'Enrico', 'Gabriel']

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i])
// }






