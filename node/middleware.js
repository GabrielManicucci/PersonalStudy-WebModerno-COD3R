// Middleware pattern (chain of responsability = cadeia de responsabilidade)
// Padrão utilizado para cadeias de passos(funções) sem acoplamento, em que é possível re-utilizar cada função em outraa parte do código e sem sequência definida

const ctx = {}

const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = (ctx, next) => {
  ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) => {
  //const execPasso = (i) => {
    // for (let i = 0; i < middlewares.length; i++) {
    //   middlewares[i](ctx, () => execPasso())
    // }
  //}
  //execPasso(0)

  const nextExec = (indice) => {
    if ( middlewares && indice < middlewares.length ) {
      middlewares[indice](ctx, () => nextExec(indice + 1))
    }
  }

  nextExec(0)
 
}

// exec(ctx, passo1, passo2, passo3)
// console.log(ctx)
