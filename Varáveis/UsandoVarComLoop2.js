
// for (var i = 0; i < 10; i++) {
//   funcs.push(function() {
//     console.log(i)
//   })
// }

// Como a forma de declarar "var" não tem escopo de bloco e sim escopo global, não é possível criar uma forma de memória, então ao chamara função,  o valor apresemtado será o mesmo.

// ---- Exemplo com "let" ---------------

const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
} 

// Como o "let" possui escopo de bloco, é possível criar uma forma de memória. 


funcs[2]()
funcs[8]()