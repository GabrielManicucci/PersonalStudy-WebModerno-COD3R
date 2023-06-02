const funcaoArrow = () => {
  console.log('Isto é uma função arrow')
}

funcaoArrow()


const funcaoArrowRetornoImplicito = () => console.log('Esta é uma função arrow com retorno implícito')

funcaoArrowRetornoImplicito()


// Uma função arrow carrega consigo o contexto léxico na qual foi criada, desa forma o this sempre aponta para o mesmo valor, que no caso do backEnd aponta para o módulo e não pode ser alterada, nem mesmo com bind

function comparaComThis (param) {
  console.log( this === param)
}

//comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)

let comparaComThisArrow = (param) => console.log( this === param )
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)