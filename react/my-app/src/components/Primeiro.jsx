import React from 'react'

export default function Primeiro(props) {
  return <h1>First Componet</h1>
} 

// or with arrow function below

// Ao usar export default, o módulo(arquivo) será representado pela função exportada, por isso que não é preciso nomear uma arow function usando export default, mas usando somente export deve-se nomea-lá

// export default () => <h1>First Componet</h1>