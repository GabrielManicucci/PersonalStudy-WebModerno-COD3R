// Javascript Object Notation(JSON) É um formato de texto para compartilhamento de dados entre sistemas

// não podem ter funções


const obj = { a: 1, b: 2, c: 3, soma() {return this.a + this.b + this.c} }

//console.log(obj.soma()) 

// transformar Objeto em JSON
console.log(JSON.stringify(obj))

// Em JSON, as chaves do esquema "chave valor" sempre devem vir entre aspas duplas, e todo o JSON deve vir entre entre chave e aspas simples

// Transformas JSON em objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

