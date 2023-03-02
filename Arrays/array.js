const namesTheFamily = ['Gabriel', 'Fernando', 'Débora', 'Cinthia']

console.log( typeof namesTheFamily)

//Acessar um elemento por meio do indice 
console.log(namesTheFamily[0])

//Adicionar elemento em determinada posição
namesTheFamily[4] = 'Fernando Filho'
console.log(namesTheFamily)

//Adicionar elemento no final do array
namesTheFamily.push('Naty')
console.log(namesTheFamily)

//Apagar último elemento do array
namesTheFamily.pop()
console.log(namesTheFamily)

//Acessar o comprimento 
console.log(namesTheFamily.length)

//Ordenar array em ordem alfabética
namesTheFamily.sort()
console.log(namesTheFamily)

// Apagar um elemento
delete namesTheFamily[0]
console.log(namesTheFamily)

//Apagar elemento no início do array
namesTheFamily.shift()
console.log(namesTheFamily)

//Adicionar elemento no início do Array 
namesTheFamily.unshift('Cinthia')
console.log(namesTheFamily)



// Método em que é possível excluir e adicional elementos ao mesmo tempo
const aprovados = ['Bia', 'Bárbara', 'Pedro']
aprovados.splice(3, 0, 'Aprovado1','Aprovado2', 'Aprovado3') // Apague, do índice 1 para frente, dois elementos, e adicione novos dois elementos 
console.log(aprovados)

// Criar array a partir de outro array, delimitado por índice
const Aprovado1 = aprovados.slice(3)
console.log(Aprovado1)

