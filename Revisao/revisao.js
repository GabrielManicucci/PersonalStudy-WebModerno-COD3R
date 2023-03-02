// Breafing about Javascript


// Fundamentos
  
  // - var * let * const = var não respeita escopo de bloco / sobrepõe qualquer outro valor pq está no escopo global / pode ser renomeada, let respeita escopo de bloco e é essêncial para loops / pode ser atribuída novamente / const
  var person = 'Gabriel'
 
  {
    var person = 'Fernando'
    
  }
  console.log(person)

  // Operadores 
    // lógicos: && = e  || = ou

    // relacionais: >, <, ==, ===, <=, >=, !=, !==

    // Condicionais: simula a estrutura condicional IF, (? = if)  (: = else)

    // Atribuição: =, +=, -= 
    let a = 1
    let b = 2

    b += a // ou -=
    console.log(b)

    // Incremento: ++
    console.log(++a)

    // Condiçional: ? = if e : = else
    function maioridade( numero ) {
      age = numero >= 18 ? true : false
      condicao = age ? 'adulto' : 'jovem'
      console.log(condicao)
    }

    maioridade(17)


// 


// Funções

  function normal () {
    console.log('Function normal')
    // usada quando o objetivo for executar a função a partir de algum evento, como o click de um botão, ou load da página, podendo ser atribuído a eventos(this) diferentes. Pq em fun normal o this pode ser qualquer evento que chamar a função
  }
  normal()

  const varFunction = function () {
    console.log('Function armazenada em uma constante')
  }
  varFunction()

  // Arrow Function 
  const arrowFun = () => {
    console.log('arrow function')
    // Usado quando o objetivo for não ter problema com os possíveis valores do this, pq em arrow fun o this sempre terá um único valor, o dono da função que é o object window, tbm serve para criar funções mais curtas
  }
  arrowFun()

  const arrowFunSimple = () => console.log('Arrow function simples')
  arrowFunSimple()

  const arrowFunFullSimple = palavra => console.log(`arrowfun ${palavra} simple`)
  arrowFunFullSimple('full')

  // Função construtora = modelo de objeto, objetivo de facilitar a criação de objetos que seguem o mesmo padrão
  function Person(name, lastName, age) {
    this.name = name

    this.lastName = lastName

    this.age = age

    this.Hello = () => console.log(`Hello, my name is ${this.name + this.lastName} and i am ${this.age} years old`)
  }

  const gabriel = new Person('Gabriel', 'Manicucci', 20)
  console.log(gabriel)
  gabriel.Hello()


  // Function Factory: Bom pra trabalhar com eventos e acessar dados de objetos sem precisar usar o this, com isso não terá conflito com this.
  function funFactory (name, age) {
    return {
      name,
      age,
      hi() {console.log(name, age)}
    }
  }

  const debora = funFactory('Débora', 12)
  console.log(debora)
  debora.hi()

  /* OBS:
    function normal = eventos na dom (this pode ser alterado)
    function construtora = Criar objetos e métodos (this é usado para criar métodos)
    function Factory = Acessar dados de um objeto a partir de um evento (Evitar o uso do this ao usar a função no browser, pois o objetivo é acessar dados de um objeto, e o this retorna o "dono" do evento que é o elemento que chamou o evento)
     

   */
  
// 

  
// Arrays (lista / matrizes)

  const family = ['Débora', 'Fernando', 'Fernando.F', 'Cinthia', 'Gabriel']

  const mySister = family[0]
  console.log(mySister)

  family.shift()
  console.log(family)
  family.unshift('Débora')
  console.log(family)
  family.pop()
  console.log(family)

  // Manipulação de array
    
    // ForEach
      const myFamily = [
        {
          name: 'Gabriel',
          altura: 1.87,
          age: 20
        },
        {
          name: 'Débora',
          altura: 1.62,
          age: 12
        },
        {
          name: 'Fernando',
          altura: 1.80,
          age: 24
        },
        {
          name: 'Fernando Pai',
          altura: 1.88,
          age: 48
        },
        {
          name: 'Cinthia',
          altura: 1.67,
          age: 52
        },
      ]

      myFamily.forEach(obj => {
        console.log(play(obj.altura, obj.age, obj.name))
      })

    // map
      console.log(myFamily.map( obj => obj.age))

    // filter
      console.log(myFamily.filter( obj => obj.altura >= 1.80))

    // reduce
      const mediaAges = function (array) {
        const sumAge = array.map(obj => obj.age).reduce( (acumulator, atual) => acumulator + atual)
        const media = sumAge / array.length
        return media
      }
    
      console.log(mediaAges(myFamily))
    // 
  
// 


// Objeto 
  
  const objeto = {
    name: 'Objeto',
    funcao: 'Criar uma estrutura de dados',
    whatIs() { console.log(this.name, this.funcao) } // ou whatIs: function() {}
  }

  console.log(objeto)
  objeto.whatIs()
// 


// Estruturas de controle 

  // if and Else and else if: Usado para algoritmos com condições, "se isso for verdadeiro, acontece aquilo"
    function play(altura, idade, name) {

      if(altura >= 1.55 && idade >= 14) {
        return `Its disponible to ${name}`
      } else {
        return `Its not disponible to ${name}`
      }
    }

    // console.log(play(1.60, 11))
  //


  // For: Usado para Loops com quantidades determinadas de repetições
  for(let i = 0; i < 10; i++) {
    console.log(`i = ${i}`)
  }
    // for in: usado para percorrer objetos
    const myPerson = {
      name: 'Gabriel',
      Age: 20
    }
    
    for(let chave in objeto) {
      console.log(objeto[chave])
    }
  // 


  // While: usado para loops com quantidades de repetições indeterminadas
  let pontos = 0
  function add() {
    ++pontos
    return
  }
  while(pontos < 10) {
    add()
    console.log(pontos)
  }



  // Switch








  







